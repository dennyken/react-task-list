import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'
import './TaskBox.scss'

const TaskBox = () => {
  return (
    <div className="task-box">
      <BoxHeader />
      <TaskInput />
      <TaskList />      
    </div>
  )
}

export default TaskBox
