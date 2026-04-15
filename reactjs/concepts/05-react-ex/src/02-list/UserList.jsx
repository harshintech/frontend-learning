import React from "react";

const UserList = () => {
  const users = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 22 },
  ];
  return (
    <div>
      {users.map((users) => (
        <ul key={users.id}>
          <li>Name :{users.name}</li>
          <li>Age :{users.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
