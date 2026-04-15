const App = () => {
  const styles = { color: "white", backgroundColor: "teal", padding: "2rem" };
  return (
    <div>
      {/* <h1 style={{ color: "white", backgroundColor: "teal", padding: "2rem" }}>
        Inline CSS
      </h1> */}

      <h1 style={styles}>Hello This is Another Inline Css</h1>
    </div>
  );
};

export default App;
