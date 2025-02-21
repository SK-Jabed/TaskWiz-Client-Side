import { useState } from "react";
import axios from "axios";

const TaskModal = ({ setOpenModal, fetchTasks }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:5000/tasks", { title });
    fetchTasks();
    setOpenModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-lg">
        <h2 className="text-xl font-bold">Add Task</h2>
        <input className="border p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 mt-3">Add</button>
      </div>
    </div>
  );
};

export default TaskModal;
