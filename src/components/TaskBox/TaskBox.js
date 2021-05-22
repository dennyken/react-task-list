import { useState } from 'react';
import _ from 'lodash';

import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './TaskBox.scss'

const TaskBox = () => {

  let [tasks, setTasks] = useState([])

  const addNewTask = input => {
    if(!(input == null || input.match(/^\s*$/))) {
      
      const newTask = {
        id: _.uniqueId('task-'),
        title: input
      }

      setTasks([...tasks, newTask])
    }
  }

  return (
    <div className="task-box">
      <BoxHeader title="My tasks" />
      <main>
        <TaskInput 
          placeholder="Start by giving your task a title"
          onSubmit={addNewTask} 
        />
        <TaskList data={tasks} />
      </main>
    </div>
  )
}

export default TaskBox
