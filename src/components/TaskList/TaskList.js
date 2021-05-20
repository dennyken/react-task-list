import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ data }) => {
  return (
    <ol className="task-list">
      { data.map(value => <TaskItem description={value} /> )}
    </ol>
  )
}

export default TaskList
