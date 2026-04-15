import React, { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

//Database
import products from "./db/data";
import Category from "./Sidebar/Category/Category";
import Card from "./components/Card";
function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //-----------Input Filter -------------
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //-----------Radio Filter -------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  //-----------Buttons Filter -------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filtedData(products, selected, query) {
    let filtedProducts = products;

    //Filtering Input Items
    if (query) {
      console.log(filteredItems)
      filtedProducts = filteredItems;
    }

    //Selected Filter Items + Here use Destructure method
    if (selected) {
      filtedProducts = filtedProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filtedProducts.map(
      ({ img, title, star, reviews, newPrice, prevPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }



  const result = filtedData(products, selectedCategory, query);

  return (
    <div>
      <Sidebar handleChange={handleChange} />
      <Nav handleInputChange={handleInputChange} query={query}  />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </div>
  );
}

export default App;
