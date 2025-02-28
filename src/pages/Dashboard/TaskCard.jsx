import React, { useState } from "react";
import { HiPencil } from "react-icons/hi";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { useTasks } from "../../hooks/useTasks";
import EditTaskModal from "../../components/Modals/EditTaskModal";

const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteTask.mutate(task._id);
      }
    });
  };

  return (
    <div className="p-5 bg-white rounded-xl shadow-lg border border-gray-200 transition-all hover:shadow-2xl hover:-translate-y-1 mb-3">
      {/* Title */}
      <h3 className="font-bold text-lg text-gray-900">{task.title}</h3>
      
      {/* Description */}
      <p className="text-sm text-gray-500 mt-1">{task.description}</p>

      {/* Action Buttons */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
          onClick={() => setIsEditOpen(true)}
        >
          <HiPencil className="h-5 w-5" />
          <span className="text-sm">Edit</span>
        </button>

        <button
          className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition-all"
          onClick={handleDelete}
        >
          <FaTrash className="h-5 w-5" />
          <span className="text-sm">Delete</span>
        </button>
      </div>

      {/* Edit Modal */}
      <EditTaskModal isOpen={isEditOpen} setIsOpen={setIsEditOpen} task={task} />
    </div>
  );
};

export default TaskCard;
