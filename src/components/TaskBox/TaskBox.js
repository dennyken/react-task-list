import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash';

import BoxHeader from '../BoxHeader'
import Input from '../Input'
import TaskList from '../TaskList/TaskList'
import TaskItem from '../TaskItem/TaskItem'
import './TaskBox.scss'
import Modal from '../Modal';

const TaskBox = () => {
  const dispatch = useDispatch()
  let [displayModal, setDisplayModal] = useState(false)
  let taskList = useSelector(state => state.taskLists[0])
  let { tasks } = taskList
  

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

  const changeTitle = input => {
    if (!(input == null || input.match(/^\s*$/))) {
      setTitle(input)
      setDisplayModal(false)
    }
  }

  return (
    <div className="task-box">
      { displayModal && 
        <Modal onBackdropClick={() => setDisplayModal(false)}>
          <BoxHeader>
            Change title
          </BoxHeader>
          <Input
            className="input-title"
            placeholder="New title" 
            onSubmit={changeTitle}
            buttonText="Change"
            focused />
        </Modal>
      }
      <BoxHeader 
        onHeaderClick={() => setDisplayModal(true)}
        editable >
          {taskList.title}
      </BoxHeader>
      <main>
        <Input
          placeholder="What do you have to do?"
          onSubmit={addTask}
          buttonText="Add"
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
