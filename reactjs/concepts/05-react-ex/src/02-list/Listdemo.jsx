const Listdemo = () => {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <main>
      {numbers.map((numbers) => (
        <ul key={numbers}>
          <li>{numbers}</li>
        </ul>
      ))}
    </main>
  );
};

export default Listdemo;
