import { useState } from 'react';
import _ from 'lodash';

import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './TaskBox.scss'

const TaskBox = () => {

  let [tasks, setTasks] = useState([])

  const toggleStatus = (id) => {
    const array = [...tasks]
    const task = array.find(t => t.id === id)
    const updatedTask = {
      ...task,
      isDone: !task.isDone
    }

    const taskIndex = array.findIndex(t => t.id === id)
    array[taskIndex] = updatedTask

    setTasks(array)
  }

  const addTask = input => {
    if(!(input == null || input.match(/^\s*$/))) {
      
      const newTask = {
        id: _.uniqueId('task-'),
        isDone: false,
        title: input
      }

      setTasks([...tasks, newTask])
    }
  }

  const removeTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="task-box">
      <BoxHeader title="My tasks" />
      <main>
        <TaskInput 
          placeholder="Start by giving your task a title"
          onSubmit={addTask}
          autoClear 
        />
        <TaskList 
          data={tasks} 
          onRemoveTask={removeTask}
          onToggleStatus={toggleStatus}
        />
      </main>
    </div>
  )
}

export default TaskBox
