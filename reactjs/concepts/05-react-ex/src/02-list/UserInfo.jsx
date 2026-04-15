const UserInfo = () => {
  const userInfo = [
    {
      username: "Harsh",
      email: "harshgoil02006@gmail.com",
      location: "India",
    },

    {
      username: "user2",
      email: "user2@gmail.com",
      location: "USA",
    },
    {
      username: "user3",
      email: "user3@gmail.com",
      location: "USA",
    },
  ];
  return (
    <main>
      {/* {userInfo.map((user)=> (
        <ul key={Math.random()}>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.location}</li>

        </ul>
    ))} */}

      {userInfo.map(({ username, email, location }) => (
        <ul key={Math.random()}>
          <li>{username}</li>
          <li>{email}</li>
          <li>{location}</li>
        </ul>
      ))}
    </main>
  );
};

export default UserInfo;
