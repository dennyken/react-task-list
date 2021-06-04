import { useState } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash';

import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import TaskItem from '../TaskItem/TaskItem'
import './TaskBox.scss'
import Modal from '../Modal';

const TaskBox = () => {
  const dispatch = useDispatch()
  let [tasks, setTasks] = useState([])
  let [displayModal, setDisplayModal] = useState(false)

  const toggleStatus = id => {
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
    if (!(input == null || input.match(/^\s*$/))) {

      const newTask = {
        id: _.uniqueId('task-'),
        isDone: false,
        title: input
      }

      setTasks([newTask, ...tasks])
    }
  }

  const removeTask = id => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  return (
    <div className="task-box">
      { displayModal && 
        <Modal onBackdropClick={() => setDisplayModal(false)}>
          Hello there!
        </Modal>
      }
      <BoxHeader 
        title="My tasks"
        onHeaderClick={() => setDisplayModal(true)} />
      <main>
        <TaskInput
          placeholder="What do you have to do?"
          onSubmit={addTask}
          autoClear />
        <TaskList>
          { tasks.map(t => (
            <TaskItem 
              key={t.id}
              id={t.id}
              isDone={t.isDone}
              description={t.title}
              onRemoveTask={removeTask}
              onToggleStatus={toggleStatus} />
          ))}
        </TaskList>
      </main>
    </div>
  )
}

export default TaskBox
