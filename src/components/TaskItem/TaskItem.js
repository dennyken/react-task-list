import { useState, memo } from 'react'
import './TaskItem.scss'
import { MdClose, MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

const TaskItem = ({ 
  id, 
  isDone, 
  description, 
  onRemoveTask,
  onToggleStatus,
}) => {

  const [isHovered, setIsHovered] = useState(false)

  const handleRemoveTask = () => {
    onRemoveTask(id)
  }

  const handleToggleStatus = () => {
    onToggleStatus(id)
  }
  
  const handleMouseLeave = e => {
    e.bubbles = false
    setIsHovered(false)
  }

  const handleMouseOver = e => {
    e.bubbles = false
    setIsHovered(true)
  }

  return (
    <li 
      className={`task-item${isDone ? ' done' : ''}`} 
      onMouseLeave={handleMouseLeave}
      onMouseOver={handleMouseOver}>
      <div 
        className={`task-status${isDone ? ' done' : ''}`}
        onClick={handleToggleStatus}>
        { 
          isDone ? 
            <MdCheckBox size={'100%'} /> : 
            <MdCheckBoxOutlineBlank size={'100%'} /> 
        }
      </div>
      <div className="task-description">
        <span title={description}>{description}</span>
      </div>
      { isHovered ? 
        ( 
          <div className="remove-icon" onClick={handleRemoveTask}>
            <MdClose size={'100%'} />
          </div>
        )
        : null
      }
    </li>
  )
}

export default memo(TaskItem)
