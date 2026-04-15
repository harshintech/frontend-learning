import React from "react";
import { useState, useEffect } from "react";
import Card from "./card";
import "./styles.css";

export default function Intro() {
  const [userName, setUserName] = useState("harshintech");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleSubmit() {
    fetchGithubUserData();
    // setUserName("");
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
      setLoading(false);
      setUserName("");
    }
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return (
      <div className="github-profile-container">
        <h2>Loading Data ! Please Wait </h2>
      </div>
    );
  }

  return (
    <div className="github-profile-container fixstyle">
      <h2 style={{ fontFamily: "sans-serif", color: "white" }}>
        Hello I am Harsh Gohil 🍃🤍🕊️ (@harshintech)
      </h2>
      <div className="input-wrapper"></div>
      {console.log(userData.avatar_url)}
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
}
