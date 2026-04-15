import { useState } from "react";

const App4 = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Spier Man", rating: 3 },
    { id: 2, title: "Superman", rating: 6 },
  ]);

  const handleClick = () => {
    setMovies(
      movies.map((m) => (m.id === 1 ? { ...movies, title: "John Wick 5" } : m))
    );
  };
  return (
    <div>
      {movies.map((m) => (
        <li key={Math.random()}>{m.title}</li>
      ))}

      <button onClick={handleClick}>Change Name</button>
    </div>
  );
};

export default App4;
