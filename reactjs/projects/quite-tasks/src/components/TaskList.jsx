import { FaCheck } from "react-icons/fa";

export default function TaskList({
  data,
  checked,
  onHandleDeleteTodo,
  onHandleCheckedTodo,
}) {
  return (
    <>
      <li className="list-item">
        <div className="todo-title">
          <p className={checked ? "onChecked" : "offChecked"}>{data}</p>
        </div>
        <div className="btn-container">
          <button
            className={checked ?"btncheckOn":"btncheck"}
            onClick={() => onHandleCheckedTodo(data)}
          >
            <FaCheck size={20} />
          </button>
          <button
            onClick={() => onHandleDeleteTodo(data)}
            className="btn btndelete"
          >
            Delete
          </button>
        </div>
      </li>
    </>
  );
}
