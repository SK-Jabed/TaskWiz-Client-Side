import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { useTasks } from "../../hooks/useTasks";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !description.trim()) return;

    addTask.mutate(
      { title, description, category: "To-Do" },
      {
        onSuccess: () => {
          setTitle("");
          setDescription("");
          setIsOpen(false);
        },
      }
    );
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <Dialog.Title className="text-lg font-semibold text-gray-900">
            Add New Task
          </Dialog.Title>

          {/* Title Input */}
          <div className="mt-4">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mt-1"
              placeholder="Enter task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div className="mt-4">
            <label className="text-sm font-medium">Description</label>
            <textarea
              className="w-full border rounded-lg px-3 py-2 mt-1"
              rows="3"
              placeholder="Enter task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Add Task
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default AddTaskModal;
