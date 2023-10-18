import React from 'react'
import { useState } from 'react';

import TaskInput from './TaskInput';
import CardComponent from './CardComponent';

const TaskDisplay = () => {
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [status, setStatus] = useState([]);
  const [filterOption, setFilterOption] = useState('All');

  function editName(ele) {
    setName(ele.target.value)
  }
  function editDescription(ele) {
    setDescription(ele.target.value)
  }
  function handleClick() {
    const newTask = { name, description };
    setTasks([...tasks, newTask]);
    setStatus([...status, 'NotCompleted']);
    setName('');
    setDescription("");
  }
  function deleteTask(index) {
    const updatedtasks = tasks.filter((d, i) => i !== index);
    setTasks(updatedtasks);

  }
  function editTask(index) {
    setEditIndex(index);
    const itemToEdit = tasks[index];
    setName(itemToEdit.name);
    setDescription(itemToEdit.description);

  }
  function saveEdit(index) {
    const updatedtasks = [...tasks];
    updatedtasks[index] = { name, description };
    setTasks(updatedtasks);
    setEditIndex(null);
    setName('');
    setDescription('');
  }
  return (
    <div className="App">
      <div className='container text-center'>
        <h3>My todo</h3>
        <TaskInput placeholder='Todo Name' value={name} onchange={editName} />
        <TaskInput placeholder='Todo Description' value={description} onchange={editDescription} />
        <button className="addbutton" onClick={handleClick}>Add Todo</button>
      </div>
      <div className='mx-5 pt-5 d-flex justify-content-between'>
        <p><b>My Todos</b></p>
        <p>Status Filter : <span>
          <select className='text-center' style={{ background: 'rgb(212, 84, 84)', color: 'white', outline: 'none', border: 'none' }}
            value={filterOption}
            onChange={(e) => setFilterOption(e.target.value)}>
            <option value='All'>All</option>
            <option value='Completed'>Completed</option>
            <option value='NotCompleted'>Not Completed</option>
          </select></span></p>
      </div>
      <div className='container-fluid'>
        {tasks.map((d, i) => (
          (filterOption === 'All') ||
          (filterOption === 'Completed' && status[i] === 'Completed') ||
          (filterOption === 'NotCompleted' && status[i] === 'NotCompleted')) ? (
          <CardComponent keys={i} data={d} deleteTask={deleteTask} index={i} editTask={editTask}
            saveEdit={saveEdit}
            isEditing={i === editIndex}
            status={status[i]}
            setStatus={(newStatus) => {
              const updatedStatus = [...status];
              updatedStatus[i] = newStatus;
              setStatus(updatedStatus);
            }}
          />
        ) : null
        )}


      </div>
    </div>

  )
}

export default TaskDisplay