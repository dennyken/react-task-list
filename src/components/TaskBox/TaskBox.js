import BoxHeader from '../BoxHeader/BoxHeader'
import TaskInput from '../TaskInput/TaskInput'
import TaskList from '../TaskList/TaskList'

const TaskBox = () => {
  return (
    <div>
      <BoxHeader />
      <TaskInput />
      <TaskList />      
    </div>
  )
}

export default TaskBox
