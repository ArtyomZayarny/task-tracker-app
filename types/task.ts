// types/task.ts
export interface Task {
  id: string;           // Unique identifier (UUID or timestamp-based)
  title: string;        // Task title (required)
  description: string;  // Task description (optional)
  status: 'todo' | 'in-progress' | 'done';
}

// Define status type for better type safety
export type TaskStatus = 'todo' | 'in-progress' | 'done';

// Define status display properties for UI consistency
export const STATUS_PROPERTIES = {
  'todo': {
    label: 'To Do',
    color: 'secondary'
  },
  'in-progress': {
    label: 'In Progress',
    color: 'blue'
  },
  'done': {
    label: 'Done',
    color: 'green'
  }
} as const;

