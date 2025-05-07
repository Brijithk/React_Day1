import React, { useState, useEffect } from 'react';  // For functional components (hooks)
import { Component } from 'react';  // For class components

import logo from './logo.svg';
import './App.css';
import { FrontPage } from './components/tasks';
import TodoList from './components/TodoList';
import TaskCounter from './components/TaskCounter';


const App = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  // 👇 Load tasks from localStorage when app starts
  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // 👇 Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // 👇 Add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  // 👇 Delete a task
  const deleteTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className="app-container">
      <FrontPage />
      <h2 className="task-heading">📑 Given Tasks:</h2>

      <div className="add-task">
        <input 
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task"
        />
        <TaskCounter tasks={tasks} />
        <button onClick={addTask}>Add Task</button>
      </div>

      <TodoList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;