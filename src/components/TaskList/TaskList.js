import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ data, onRemoveTask }) => {
  return (
    <ol className="task-list">
      { data.map((value) => (
        <TaskItem 
          key={value.id}
          id={value.id}
          description={value.title}
          onRemoveTask={onRemoveTask} /> 
      ))}
    </ol>
  )
}

export default TaskList
