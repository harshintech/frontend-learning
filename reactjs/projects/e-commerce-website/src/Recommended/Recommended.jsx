import "./Recommended.css";
// import "./Button.jsx";
import Button from "../components/Button";

function Recommended({ handleClick }) {
  return (
    <div>
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        {/* <button className="btns">All Products</button> */}
        <Button onClickHandler={handleClick} value="" title="All Product" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" />
        {/* <button onClickHandler={handleClick} value="Nike" title="Nike" /> */}
      </div>
    </div>
  );
}

export default Recommended;
