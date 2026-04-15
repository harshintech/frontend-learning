import React from "react";
import Card from "../components/Card";

const App = () => {
  // return (
  //   <User
  //     img="https://images.unsplash.com/photo-1726056652635-7db7a936e7be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  //     name="Harsh In Tech"
  //     age={22}
  //     isMarried={false}
  //     hobbies={["Coding", "Reading", "Sleeping"]}
  //   />
  // );

  return (
    <div>
      <Card>
        <h1>Hello i am Props 1</h1>
        <p>We also access like this</p>
      </Card>
      <Card>
        <h1>Hello i am Props 2</h1>
        <p>We also access like this</p>
      </Card>
      <Card>
        <h1>Hello i am Props 3</h1>
        <p>We also access like this</p>
      </Card>
    </div>
  );
};

// const User = (props) =>{
//   return (
//     <section>
//       <img src={props.img} width={200} alt={props.name}/>
//       <h1>Name: {props.name}</h1>
//       <h2>Age: {props.age}</h2>
//       <h3>Is married: {props.isMarried}</h3>
//       <h4>Hobbies: {props.hobbies}</h4>
//     </section>
//   )
// }

// //--> Props Desturcturing
// const User = ({ img, name, age, isMarried, hobbies }) => {
//   return (
//     <section>
//       <img src={img} width={200} alt={name} />
//       <h1>Name: {name}</h1>
//       <h2>Age: {age}</h2>
//       <h3>Is married: {isMarried}</h3>
//       <h4>Hobbies: {hobbies}</h4>
//     </section>
//   );
// };

export default App;
