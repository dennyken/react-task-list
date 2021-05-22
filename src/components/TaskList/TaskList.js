import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ data }) => {
  return (
    <ol className="task-list">
      { data.map(value => <TaskItem description={value.title} /> )}
    </ol>
  )
}

export default TaskList
