// app/page.tsx
"use client";

import { TaskList } from "../components/TaskList";
import { useTasks } from "../hooks/useTasks";

export default function Home() {
  const {
    tasks,
    isLoading,
    addTask,
    updateTask,
    deleteTask,
    updateTaskStatus,
  } = useTasks();

  return (
    <main className="container mx-auto py-8 px-4 max-w-3xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-2">Task Tracker</h1>
        <p className="text-gray-600">Manage your tasks efficiently</p>
      </div>

      <TaskList
        tasks={tasks}
        isLoading={isLoading}
        onAddTask={addTask}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
        onStatusChange={updateTaskStatus}
      />
    </main>
  );
}
