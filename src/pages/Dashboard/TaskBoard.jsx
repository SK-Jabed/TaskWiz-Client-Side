import React from "react";
import TaskCard from "./TaskCard";
import { useTasks } from "../../hooks/useTasks";
import AddTaskModal from "../../components/Modals/AddTaskModal";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const TaskBoard = () => {
  const { tasks, isLoading } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <p>Loading tasks...</p>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Task Management
        </h1>
        <button onClick={() => setIsModalOpen(true)}>
          <FaPlusCircle className="h-10 w-10 text-blue-600 hover:text-purple-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
        {["To-Do", "In Progress", "Done"].map((category) => (
          <div key={category} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-3">{category}</h2>
            {tasks
              ?.filter((task) => task.category === category)
              .map((task) => (
                <TaskCard key={task._id} task={task} />
              ))}
          </div>
        ))}
      </div>

      <AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default TaskBoard;