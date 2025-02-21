import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import axios from "axios";
import TaskModal from "../../components/Modals/TaskModal";

const TaskCard = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task._id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} className="bg-white p-3 rounded-lg shadow-md mb-2">
      <h3 className="font-bold">{task.title}</h3>
      <p className="text-gray-600 text-sm">{task.description}</p>
      <div className="flex gap-2 mt-2">
        <button className="text-blue-500">
          <FaRegEye />
        </button>
        <button className="text-yellow-500">
          <MdEdit />
        </button>
        <button onClick={() => deleteTask(task._id)} className="text-red-500">
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;