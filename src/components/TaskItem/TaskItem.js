import './TaskItem.scss'

const TaskItem = ({ description }) => {
  return (
    <li className="task-item">
      <span>{description}</span>
    </li>
  )
}

export default TaskItem
