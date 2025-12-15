// hooks/useTasks.ts
'use client';

import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Task, TaskStatus } from '../types/task';
import { getTasks, saveTasks } from '../utils/storage';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = getTasks();
    setTasks(storedTasks);
    setIsLoading(false);
  }, []);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      saveTasks(tasks);
    }
  }, [tasks, isLoading]);

  // Add a new task
  const addTask = (title: string, description: string = '') => {
    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status: 'todo' as TaskStatus
    };
    setTasks([...tasks, newTask]);
  };

  // Update an existing task
  const updateTask = (updatedTask: Task) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  // Delete a task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Update task status
  const updateTaskStatus = (id: string, status: TaskStatus) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status } : task
    ));
  };

  return {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    updateTaskStatus
  };
};

