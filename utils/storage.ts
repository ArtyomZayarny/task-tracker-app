// utils/storage.ts
import { Task } from '../types/task';

const STORAGE_KEY = 'orbios-tasks';

// Get all tasks from localStorage
export const getTasks = (): Task[] => {
  try {
    if (typeof window === 'undefined') {
      // Server-side rendering: return empty array
      return [];
    }
    const tasksJson = localStorage.getItem(STORAGE_KEY);
    return tasksJson ? JSON.parse(tasksJson) : [];
  } catch (error) {
    console.error('Error retrieving tasks from localStorage:', error);
    return [];
  }
};

// Save tasks to localStorage
export const saveTasks = (tasks: Task[]): void => {
  try {
    if (typeof window === 'undefined') {
      // Server-side rendering: do nothing
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error('Error saving tasks to localStorage:', error);
  }
};

