import { memo } from 'react'
import './TaskItem.scss'

const TaskItem = ({ id, description, onRemoveTask }) => {
  const handleClick = () => {
    onRemoveTask(id)
  }
  
  return (
    <li className="task-item" onClick={handleClick} value={id}>
      <span>{description}</span>
    </li>
  )
}

export default memo(TaskItem)
