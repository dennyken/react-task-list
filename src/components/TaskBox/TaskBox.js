import { useState } from 'react';

import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './TaskBox.scss'

const TaskBox = () => {

  let [tasks, setTasks] = useState([])
  let [task, setTask] = useState({ title: '' })

  const addNewTask = () => {
    if(!(task.title == null || task.title.match(/^\s*$/))) {
      setTasks([...tasks, task])
      setTask({ title: '' })
    }
  }

  const setTaskTitle = e => {
    setTask({...task, title: e.target.value })
  }

  return (
    <div className="task-box">
      <BoxHeader title="My tasks" />
      <main>
        <TaskInput 
          value={task.title}
          placeholder="Start by giving your task a title"
          onSubmit={addNewTask}
          onChange={setTaskTitle} />
        <TaskList data={tasks} />
      </main>
    </div>
  )
}

export default TaskBox
