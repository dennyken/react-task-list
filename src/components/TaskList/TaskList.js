import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = () => {
  return (
    <ol className="task-list">
      <TaskItem />
      <TaskItem />
      <TaskItem />
    </ol>
  )
}

export default TaskList
