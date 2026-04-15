import Profile from "./components/Profile";
import ShoppingList from "./components/ShoppingList";
import TodoList from "./components/TodoList";

const App = () => {
  return (
    <div>
      <TodoList />
      <Profile />
      <ShoppingList />
    </div>
  );
};

export default App;
