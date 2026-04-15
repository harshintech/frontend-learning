const ValidPassword = () => <h1>Valid Password</h1>;
const InvalidPassword = () => <h1>Invalid Password</h1>;

const Password = ({ isValid }) => {
  // if (isValid) {
  //   return <ValidPassword />;
  // }
  // return <InvalidPassword />;
  return isValid ? <ValidPassword /> : <InvalidPassword />
};

const Cart = () =>{
  const items = ["Wireless Earbuds", "Power Bank","New SSD", "Hoddies"];

  return <div>
    <h1>Cart 🛒</h1>
    {items.length>0 && <h2>You have {items.length} items in your Cart</h2>}

    <ul>
      <h4>Products</h4>
      {items.map(item=>(
        <li key={(Math.random())}>{item}</li>
      ))}
    </ul>
  </div>
}

const App = () => {
  return (
    <section>
      <Password isValid={false} />
      <Cart />
    </section>
  );
};

export default App;
