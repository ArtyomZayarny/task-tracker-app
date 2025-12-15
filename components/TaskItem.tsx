// components/TaskItem.tsx
'use client';

import { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Task, TaskStatus, STATUS_PROPERTIES } from '../types/task';
import { TaskForm } from './TaskForm';

interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
  onStatusChange: (id: string, status: TaskStatus) => void;
}

export function TaskItem({ task, onUpdate, onDelete, onStatusChange }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  
  const handleUpdate = (title: string, description: string) => {
    onUpdate({ ...task, title, description });
    setIsEditing(false);
  };

  const getStatusBadge = (status: TaskStatus) => {
    const { label, color } = STATUS_PROPERTIES[status];
    const variant = color === 'secondary' ? 'secondary' : color === 'blue' ? 'default' : 'default';
    return (
      <Badge variant={variant} className={color === 'blue' ? 'bg-blue-500' : color === 'green' ? 'bg-green-500' : ''}>
        {label}
      </Badge>
    );
  };

  return (
    <Card className="mb-4">
      {isEditing ? (
        <CardContent className="pt-6">
          <TaskForm 
            task={task} 
            onSubmit={handleUpdate} 
            onCancel={() => setIsEditing(false)} 
          />
        </CardContent>
      ) : (
        <>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle>{task.title}</CardTitle>
              {getStatusBadge(task.status)}
            </div>
          </CardHeader>
          <CardContent>
            {task.description ? (
              <p className="text-gray-600">{task.description}</p>
            ) : (
              <p className="text-gray-400 italic">No description</p>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <Select 
                value={task.status} 
                onValueChange={(value) => onStatusChange(task.id, value as TaskStatus)}
              >
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Change status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-x-2">
              <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                Edit
              </Button>
              <Button variant="destructive" size="sm" onClick={() => onDelete(task.id)}>
                Delete
              </Button>
            </div>
          </CardFooter>
        </>
      )}
    </Card>
  );
}

