import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTasks } from "../../hooks/useTasks";
import TaskCard from "./TaskCard";
import AddTaskModal from "../../components/Modals/AddTaskModal";
import { FaPlusCircle } from "react-icons/fa";
import LoadingSpinner from "../../components/Shared/LoadingSpinner/LoadingSpinner";
import { toast } from "react-hot-toast";

const TaskBoard = () => {
  const { tasks, isLoading, updateTaskCategory, updateTaskPositions } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (isLoading) return <LoadingSpinner />;

  // Handle Drag End
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    // If dropped outside the list
    if (!destination) return;

    // If dropped in the same place
    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // Reorder within the same category
    if (source.droppableId === destination.droppableId) {
      const categoryTasks = tasks
        .filter((task) => task.category === source.droppableId)
        .sort((a, b) => a.position - b.position);

      const [movedTask] = categoryTasks.splice(source.index, 1);
      categoryTasks.splice(destination.index, 0, movedTask);

      // Update positions in the database
      const updatedTasks = categoryTasks.map((task, index) => ({
        ...task,
        position: index,
      }));

      updateTaskPositions.mutate(updatedTasks);
    } else {
      // Move to a different category
      updateTaskCategory.mutate({
        id: draggableId,
        category: destination.droppableId,
      });
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
          Manage Your Task
        </h1>
        <button
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-semibold rounded-lg hover:from-sky-600 hover:to-violet-700 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <span>Add a Task</span>
            <FaPlusCircle className="h-5 w-5" />
          </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
          {["To-Do", "In Progress", "Done"].map((category) => (
            <Droppable key={category} droppableId={category}>
              {(provided) => (
                <div
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                  className="bg-gray-100 p-4 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-3">{category}</h2>
                  {tasks
                    ?.filter((task) => task.category === category)
                    .sort((a, b) => a.position - b.position) // Sort tasks by position
                    .map((task, index) => (
                      <Draggable
                        key={task._id}
                        draggableId={task._id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <TaskCard task={task} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      <AddTaskModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
};

export default TaskBoard;