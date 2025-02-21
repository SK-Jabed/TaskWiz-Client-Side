import { Dialog } from "@headlessui/react";
import { useState, useEffect } from "react";
import { useTasks } from "../../hooks/useTasks";

const EditTaskModal = ({ isOpen, setIsOpen, task }) => {
  const { updateTask } = useTasks();

  // State to hold form data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // Populate form fields when modal opens
  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
      setCategory(task.category);
    }
  }, [task]);

  // Handle task update
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
      <div className="fixed inset-0 bg-black bg-opacity-50" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <Dialog.Title className="text-lg font-semibold text-gray-900">
            Edit Task
          </Dialog.Title>

          {/* Title Input */}
          <div className="mt-4">
            <label className="text-sm font-medium">Title</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 mt-1"
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Category Select */}
          <div className="mt-4">
            <label className="text-sm font-medium">Category</label>
            <select
              className="w-full border rounded-lg px-3 py-2 mt-1"
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
            <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={() => setIsOpen(false)}>Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" onClick={handleUpdate}>Save Changes</button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default EditTaskModal;
