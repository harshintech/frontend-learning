import MenuList from "./menu-list";
import "./styles.css";

export default function TreeView({ menus = [] }) {
  return (
    <div className="noth fixstyle">
        
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
      <div className="second-div">
      <h1>Project No.6</h1>
      </div>
      
    </div>
  );
}
