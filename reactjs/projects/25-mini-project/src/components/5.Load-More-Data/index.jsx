import React, { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const responce = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await responce.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        console.log(products);
        setLoading(false);
      }

      console.log(result);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length === 100) {
      setDisableButton(true);
    }
  });

  if (loading) {
    return <div>Loading Data ! Please Wait</div>;
  }

  return (
    <div>
      <div className="load-container fixstyle">
        <h1 className="pn5">Project No.5</h1>
        <div className="product-container">
          {products && products.length
            ? products.map((item, index) => (
                <div className="product" key={index}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                  {/* <p>{item.price}</p> */}
                </div>
              ))
            : null}
        </div>
        <div className="button-container">
          <button disabled={disableButton} onClick={() => setCount(count + 1)}>
            {disableButton
              ? "You’ve reached the limit of 100 products."
              : "Load More Products"}
          </button>
        </div>
      </div>
    </div>
  );
}
