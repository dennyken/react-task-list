import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ data }) => {
  const values = [
    "Find the All-Blue",
    "Find all the poneglyphs",
    "Find the One Piece",
    "Become the king of all pirates"
  ]

  return (
    <ol className="task-list">
      { data.map(value => <TaskItem description={value} /> )}
    </ol>
  )
}

export default TaskList
