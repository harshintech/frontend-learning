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
            <a target="_blank" href={`https://github.com/harshintech`}>
              <span>{`@${login}`}</span>
            </a>
          </h3>
          <div className="profile-info">
            <div>
              <p>
                "Here I’m sharing my 15 mini projects that are commonly asked by
                interviewers."
              </p>
              <img className="logooo" src="/images/mainlogo.png" alt="" />
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
