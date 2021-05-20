import { useState } from 'react';

import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './TaskBox.scss'

const TaskBox = () => {

  let [tasks, setTasks] = useState([])

  const addTask = (value) => {
    let newState = [ ...tasks, value ]

    setTasks(newState)
  }

  return (
    <div className="task-box">
      <BoxHeader title="My tasks" />
      <main>
        <TaskInput onSubmit={addTask} />
        <TaskList data={tasks} />
      </main>
    </div>
  )
}

export default TaskBox
