import { useState } from "react";

export default function TaskHeader({ onAddTodo }) {
  const [inputValue, setInputValue] = useState({
    id: "",
    content: "",
    checked: false,
  });

  const handleInputChange = (value) => {
    setInputValue({ id: value, content: value, checked: false });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onAddTodo(inputValue);
    setInputValue({ id: "", content: "", checked: false });
  };

  return (
    <>
      <div className="task-header">
        <h2>Tasks</h2>

        <form onSubmit={handleFormSubmit} className="input-box">
          <input
            type="text"
            value={inputValue.content}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="Enter Your Todo Here"
          />
          <button type="submit" className="add-task-btn">
            + Add
          </button>
        </form>
      </div>
    </>
  );
}
