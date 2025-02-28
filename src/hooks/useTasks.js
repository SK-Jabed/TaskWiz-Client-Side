import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import useAuth from "./useAuth";
import Swal from "sweetalert2";

export const useTasks = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch Tasks for Logged-in User
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/tasks?email=${user?.email}`);
      return data;
    },
  });

  // Reorder Tasks Mutation
  const updateTaskOrder = useMutation({
    mutationFn: (updatedTasks) =>
      axiosInstance.put("/tasks/reorder", { tasks: updatedTasks }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task order updated!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update task order",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  // Add Task Mutation
  const addTask = useMutation({
    mutationFn: (newTask) =>
      axiosInstance.post("/tasks", {
        ...newTask,
        user: { name: user?.displayName, email: user?.email },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task added successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to add task",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  // Update Task Mutation
  const updateTask = useMutation({
    mutationFn: ({ id, updatedTask }) =>
      axiosInstance.put(`/tasks/${id}`, updatedTask),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task updated successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to update task",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  // Update Task Category Mutation
  const updateTaskCategory = useMutation({
    mutationFn: ({ id, category }) =>
      axiosInstance.put(`/tasks/${id}/category`, { category }),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task moved successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to move task",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  // Delete Task Mutation
  const deleteTask = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/tasks/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Task deleted successfully!",
        showConfirmButton: false,
        timer: 1500,
      });
    },
    onError: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Failed to delete task",
        showConfirmButton: false,
        timer: 1500,
      });
    },
  });

  return {
    tasks,
    isLoading,
    addTask,
    deleteTask,
    updateTask,
    updateTaskCategory,
    updateTaskOrder,
  };
};
