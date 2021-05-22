import { memo } from 'react'
import './TaskItem.scss'

const TaskItem = ({ description }) => {
  return (
    <li className="task-item">
      <span>{description}</span>
      {console.log('TaskItem')}
    </li>
  )
}

export default memo(TaskItem)
