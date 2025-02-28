import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";

const EditTaskModal = ({ isOpen, setIsOpen, task }) => {
  const { updateTask } = useTasks();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category);
    }
  }, [task]);

  const handleUpdate = () => {
    if (!title.trim() || !description.trim()) return;

    updateTask.mutate(
      { id: task._id, updatedTask: { title, description, category } },
      {
        onSuccess: () => {
          setIsOpen(false);
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <div className="fixed inset-0 bg-black/30 backdrop-blur-md transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full border border-gray-200">
          <Dialog.Title className="text-2xl font-bold text-start text-black">
            Edit Task
          </Dialog.Title>

          {/* Title Input */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Description</label>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Category Select */}
          <div className="mt-4">
            <label className="text-sm font-medium text-gray-700">Category</label>
            <select
              className="w-full border border-gray-300 rounded-lg px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="To-Do">To-Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Done">Done</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-end gap-3">
            <button
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition font-medium"
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition font-medium"
              onClick={handleUpdate}
            >
              Save Changes
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditTaskModal;
