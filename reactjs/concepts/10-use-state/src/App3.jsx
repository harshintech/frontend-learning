import { useState } from "react";

const App3 = () => {
  const [movie, setMovie] = useState({
    title: "Equalizer 3",
    ratings: 7,
  });

  const handleClick = () => {
    // const copyMovie = {
    //   ...movie,
    //   ratings: 5,
    // };

    setMovie({ ...movie, ratings: 5 });
  };
  return (
    <div>
      <h1>Title:{movie.title}</h1>
      <h1>Rating:{movie.ratings}</h1>
      <button onClick={handleClick}>Change Rating</button>
    </div>
  );
};



export default App3;
