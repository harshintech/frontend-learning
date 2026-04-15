import React from "react";
import "./card.css";

export default function Card({ user }) {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    created_at,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div>
      {/* HTML CSS JSResult Skip Results Iframe EDIT ON */}
      <figure className="gpf-container">
        <img
          src={avatar_url}
          alt="profile-sample1"
          className="background-img"
        />
        <img src={avatar_url} alt="profile-sample1" className="profile" />
        <figcaption>
          <h3>
            {name}
            <a target="_blank" href={`https://github.com/${login}`}>
              <span>{`@${login}`}</span>
            </a>
            <p>
          User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
          </h3>
          <div className="profile-info">
            <div>
              <p>Public Repos</p>
              <p>{public_repos}</p>
            </div>
            <div>
              <p>Followers</p>
              <p>{followers}</p>
            </div>
            <div>
              <p>Following</p>
              <p>{following}</p>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
