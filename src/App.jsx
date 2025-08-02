import { useState } from "react";
import AppName from "./AppName.jsx";
import Appfield from "./Appfield.jsx";
import Appdata from "./Appdata.jsx";

function App() {
  const [tasks, setTasks] = useState([]);
  
  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Remove a task by index
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-container d-flex flex-column align-items-center justify-content-center min-vh-100">
      <AppName />
      <Appfield onAdd={addTask} />
      {tasks.map((task, idx) => (
        <Appdata
          key={idx}
          task={task}
          onRemove={() => removeTask(idx)}
        />
      ))}
    </div>
  );
}

export default App;