import React, { useEffect, useState } from "react";
import Card from "./card";
import "./styles.css";

export default function GithubProfileFinder() {
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
      <h1>Project No.12</h1>
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Search Github Username..."
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <button disabled={userName ? false : true} onClick={handleSubmit}>
          Search
        </button>
      </div>
      {console.log(userData.avatar_url)}
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
}
