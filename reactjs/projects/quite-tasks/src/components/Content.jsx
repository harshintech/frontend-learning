import { useState, useEffect } from "react";
import TaskHeader from "./TaskHeader";
import TaskList from "./TaskList";

const todoKey = "reactTodo";

export default function Content() {
  const [tasks, setTasks] = useState(() => {
    const rawTodos = localStorage.getItem(todoKey);
    if (!rawTodos) {
      return [];
    }
    return JSON.parse(rawTodos);
  });

  function handleFormSubmit(inputValue) {
    const { id, content, checked } = inputValue;

    if (!content) return;
    // if (tasks.includes(content)) return;

    const ifTodoContentMatched = tasks.find((currTask) => {
      return currTask.content === content;
    });

    if (ifTodoContentMatched) return;
    setTasks((prev) => [
      ...prev,
      { id: id, content: content, checked: checked },
    ]);
  }

  useEffect(() => {
    localStorage.setItem(todoKey, JSON.stringify(tasks));
  }, [tasks]);

  //this is run on every render and it's fine but useEffect is more convient way
  //localStorage.setItem(todoKey, JSON.stringify(tasks));

  function handleDelete(task) {
    const cpytask = tasks.filter((item) => item.content !== task);
    setTasks(cpytask);
  }

  const handleChecked = (content) => {
    const updatedTask = tasks.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });

    setTasks(updatedTask);
  };

  return (
    <div className="content-box">
      <TaskHeader onAddTodo={handleFormSubmit} />

      <div className="list-box">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <TaskList
              key={task.id}
              data={task.content}
              checked={task.checked}
              onHandleDeleteTodo={handleDelete}
              onHandleCheckedTodo={handleChecked}
            />
          ))}

        {tasks.length > 0 && (
          <button onClick={() => setTasks([])} className="btn btnclear">
            Clear All
          </button>
        )}
      </div>

      {/* <TaskList tasks={tasks} /> */}
    </div>
  );
}
