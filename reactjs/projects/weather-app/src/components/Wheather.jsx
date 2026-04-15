import React, { useEffect, useState } from "react";
import Search from "./Search";
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export default function Wheather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setweatherData] = useState(null);
  const [iconUrl, setIconUrl] = useState(null);

  async function fetchweatherData(search) {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}`
      );

      const data = await res.json();
      console.log(data);
      if (data) {
        setweatherData(data);
        setLoading(false);
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setIconUrl(iconUrl); // ✅ Set the icon URL here
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchweatherData("surat");
  }, []);

  function handleSearch() {
    fetchweatherData(search);
    setSearch("");
  }

  function getCurrentDate() {
    return new Date().toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Set to false if you prefer 24-hour format
    });
  }

  return (
    <div className="main">
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading....</div>
      ) : (
        <div>
          <div className="city-name">
            <img src={iconUrl} alt="Weather icon" />
            <h2>
              {weatherData?.name},<span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>

          <div className="info-container">
            <div className="info">
              <p className="wind">{weatherData?.main?.temp}</p>
              <p>
                {" "}
                {weatherData && weatherData.weather && weatherData.weather[0]
                  ? weatherData.weather[0].description
                  : ""}
              </p>
            </div>
            <div className="info">
              <p className="wind">{weatherData?.wind?.speed}</p>
              <p>Wind Speed</p>
            </div>

            <div className="info">
              <p className="humidity">{weatherData?.main?.humidity}%</p>
              <p>Humidity</p>
            </div>
          </div>
        </div>
      )}

      <div className="author">
        <p>Code By Harsh Gohil (@harshintech)</p>
      </div>
    </div>
  );
}
