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

      <div className="grid grid-cols-3 gap-4 mt-6">
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




// import { useState } from "react";
// import { MdEdit } from "react-icons/md";
// import { FaRegEye, FaTrash, FaPlusCircle } from "react-icons/fa";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import { DndContext, closestCorners } from "@dnd-kit/core";
// import {
//   SortableContext,
//   useSortable,
//   arrayMove,
//   rectSortingStrategy,
// } from "@dnd-kit/sortable";
// import { CSS } from "@dnd-kit/utilities";
// import TaskModal from "../../components/Modals/TaskModal";

// // Fetch Tasks for Logged-in User
// const fetchTasks = async (userId) => {
//   const { data } = await axios.get(`http://localhost:5000/tasks?userId=${userId}`);
//   return data;
// };

// const TaskBoard = ({ userId }) => {
//   const [openModal, setOpenModal] = useState(false);
//   const queryClient = useQueryClient();

//   // Fetch tasks using TanStack Query
//   const { data: tasks = [], isLoading } = useQuery({
//     queryKey: ["tasks", userId],
//     queryFn: () => fetchTasks(userId),
//   });

//   // Update task mutation
//   const updateTaskMutation = useMutation(
//     async ({ id, category, order }) => {
//       await axios.put(`http://localhost:5000/tasks/${id}`, { category, order });
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["tasks", userId]);
//       },
//     }
//   );

//   // Handle Drag End
//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (!over) return;

//     const activeId = active.id;
//     const overId = over.id;

//     if (activeId === overId) return;

//     const activeTask = tasks.find((task) => task._id === activeId);
//     const overTask = tasks.find((task) => task._id === overId);

//     if (activeTask && overTask) {
//       const updatedTasks = arrayMove(tasks, tasks.indexOf(activeTask), tasks.indexOf(overTask));

//       updatedTasks.forEach((task, index) => {
//         updateTaskMutation.mutate({
//           id: task._id,
//           category: task.category,
//           order: index,
//         });
//       });
//     }
//   };

//   if (isLoading) return <p>Loading...</p>;

//   return (
//     <div className="max-w-6xl mx-auto p-5">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-5">
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
//           Task Manager
//         </h1>
//         <button onClick={() => setOpenModal(true)} className="text-xl flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
//           <FaPlusCircle /> Add Task
//         </button>
//       </div>

//       {/* Drag and Drop Context */}
//       <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//         <div className="grid grid-cols-3 gap-4">
//           {["To-Do", "In Progress", "Done"].map((category) => (
//             <TaskColumn key={category} category={category} tasks={tasks} updateTaskMutation={updateTaskMutation} />
//           ))}
//         </div>
//       </DndContext>

//       {/* Task Modal */}
//       {openModal && <TaskModal setOpenModal={setOpenModal} />}
//     </div>
//   );
// };

// // Task Column Component
// const TaskColumn = ({ category, tasks, updateTaskMutation }) => {
//   const filteredTasks = tasks.filter((task) => task.category === category);

//   return (
//     <div className="bg-gray-100 p-4 rounded-lg shadow-md min-h-[200px]">
//       <h2 className="text-xl font-semibold mb-3">{category}</h2>
//       <SortableContext items={filteredTasks.map((task) => task._id)} strategy={rectSortingStrategy}>
//         {filteredTasks.map((task) => (
//           <TaskItem key={task._id} task={task} updateTaskMutation={updateTaskMutation} />
//         ))}
//       </SortableContext>
//     </div>
//   );
// };

// // Task Item Component
// const TaskItem = ({ task, updateTaskMutation }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
//     id: task._id,
//   });

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//   };

//   return (
//     <div
//       ref={setNodeRef}
//       style={style}
//       {...attributes}
//       {...listeners}
//       className="bg-white p-3 rounded-lg shadow-md mb-2 cursor-pointer"
//     >
//       <h3 className="font-bold">{task.title}</h3>
//       <p className="text-gray-600 text-sm">{task.description}</p>
//       <div className="flex gap-2 mt-2">
//         <button className="text-blue-500">
//           <FaRegEye />
//         </button>
//         <button className="text-yellow-500">
//           <MdEdit />
//         </button>
//         <button onClick={() => updateTaskMutation.mutate({ id: task._id })} className="text-red-500">
//           <FaTrash />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TaskBoard;
