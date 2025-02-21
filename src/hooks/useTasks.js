import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import useAuth from "./useAuth";

export const useTasks = () => {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  // Fetch tasks for logged-in user
  const { data: tasks, isLoading } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/tasks?email=${user?.email}`);
      return data;
    },
  });

  // Add Task Mutation
  const addTask = useMutation({
    mutationFn: (newTask) =>
      axiosInstance.post("/tasks", {
        ...newTask,
        user: { name: user?.displayName, email: user?.email },
      }),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  // Update Task Mutation
  const updateTask = useMutation({
    mutationFn: ({ id, updatedTask }) =>
      axiosInstance.put(`/tasks/${id}`, updatedTask),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  // Delete Task Mutation
  const deleteTask = useMutation({
    mutationFn: (id) => axiosInstance.delete(`/tasks/${id}`),
    onSuccess: () => queryClient.invalidateQueries(["tasks"]),
  });

  return { tasks, isLoading, addTask, updateTask, deleteTask };
};
