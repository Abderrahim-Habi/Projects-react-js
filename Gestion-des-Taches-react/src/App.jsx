import React, { useState,useEffect } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const [filter, setFilter] = useState('all');

    useEffect(() => {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    },[tasks])

  // Fonction pour ajouter une tâche
  const addTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  // Fonction pour basculer l'état "complété" d'une tâche
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true; // 'all'
  });

  return (
    <div className="App">
      <h1>Gestion des Tâches</h1>
      <AddTask addTask={addTask} />
      <Filter filter={filter} setFilter={setFilter} />
      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
      />
    </div>
  );
};

export default App;
