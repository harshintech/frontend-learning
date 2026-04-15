import React, { useEffect, useState } from "react";
import "./styles.css";
import Suggesstions from "./suggesstions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }
  }

  async function fetchListOfUser() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      console.log(data);
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
      setError(error);
    }
  }

  console.log(users, filteredUsers);
  useEffect(() => {
    fetchListOfUser();
  }, []);

  function handleClick(event) {
    console.log(event.target.innerText);
    setShowDropDown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  console.log(users, searchParam);
  return (
    <div className="search-autocomplete-container fixstyle">
      <div className="search-box">
        <h1>Project No.13</h1>
        <div>
          <p>Search Auto Complete</p>
        </div>
        {loading ? (
          <div>Loading Data ! Please Waite </div>
        ) : (
          <input
            type="text"
            value={searchParam}
            name="search-user"
            placeholder="Search User Here..."
            onChange={handleChange}
          />
        )}

        {showDropDown && (
          <Suggesstions handleClick={handleClick} data={filteredUsers} />
        )}
      </div>
    </div>
  );
}
