// components/TaskList.tsx
'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { TaskItem } from './TaskItem';
import { TaskForm } from './TaskForm';
import { Task, TaskStatus } from '../types/task';

interface TaskListProps {
  tasks: Task[];
  isLoading: boolean;
  onAddTask: (title: string, description: string) => void;
  onUpdateTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export function TaskList({
  tasks,
  isLoading,
  onAddTask,
  onUpdateTask,
  onDeleteTask,
  onStatusChange
}: TaskListProps) {
  if (isLoading) {
    return <div className="text-center py-8">Loading tasks...</div>;
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Add New Task</CardTitle>
          <CardDescription>Create a new task to track</CardDescription>
        </CardHeader>
        <CardContent>
          <TaskForm onSubmit={onAddTask} />
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-xl font-bold">Your Tasks</h2>
        
        {tasks.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8 text-gray-500">
              No tasks yet. Add a task to get started!
            </CardContent>
          </Card>
        ) : (
          tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onUpdate={onUpdateTask}
              onDelete={onDeleteTask}
              onStatusChange={onStatusChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

