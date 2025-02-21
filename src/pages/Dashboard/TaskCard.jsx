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
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="font-semibold">{task.title}</h3>
      <p className="text-sm text-gray-600">{task.description}</p>
      <div className="flex justify-between mt-3">
        <HiPencil
          className="h-5 w-5 text-blue-600 cursor-pointer"
          onClick={() => setIsEditOpen(true)}
        />
        <FaTrash
          className="h-5 w-5 text-red-600 cursor-pointer"
          onClick={handleDelete}
        />
      </div>

      <EditTaskModal isOpen={isEditOpen} setIsOpen={setIsEditOpen} task={task} />
    </div>
  );
};

export default TaskCard;
