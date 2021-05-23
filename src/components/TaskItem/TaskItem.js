import { memo } from 'react'
import './TaskItem.scss'
import { MdClose, MdCheckCircle } from 'react-icons/md'

const TaskItem = ({ 
  id, 
  isDone, 
  description, 
  onRemoveTask,
  onToggleStatus
}) => {

  const handleRemoveTask = () => {
    onRemoveTask(id)
  }

  const handleToggleStatus = () => {
    onToggleStatus(id)
  }
  
  return (
    <li className={`task-item ${isDone && 'done'}`}>
      <div 
        className={`task-status ${isDone && 'done'}`}
        onClick={handleToggleStatus}
      >
        <MdCheckCircle size={'100%'} />
      </div>
      <div className="task-description">
        <span title={description}>{description}</span>
      </div>
      <div className="remove-icon" onClick={handleRemoveTask}>
        <MdClose size={'100%'} />
      </div>
    </li>
  )
}

export default memo(TaskItem)
