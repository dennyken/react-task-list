import { memo } from 'react'
import './TaskItem.scss'
import { MdClose } from 'react-icons/md'

const TaskItem = ({ id, description, onRemoveTask }) => {
  const handleRemoveTask = () => {
    onRemoveTask(id)
  }
  
  return (
    <li className="task-item" value={id}>
      <span>{description}</span>
      <div className="remove-icon" onClick={handleRemoveTask}>
        <MdClose size={'100%'} />
      </div>
    </li>
  )
}

export default memo(TaskItem)
