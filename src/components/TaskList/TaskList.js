import './TaskList.scss'

import TaskItem from '../TaskItem/TaskItem'

const TaskList = ({ data, onRemoveTask, onToggleStatus }) => {
  return (
    <ol className="task-list">
      { data.map((value) => (
        <TaskItem 
          key={value.id}
          id={value.id}
          isDone={value.isDone}
          description={value.title}
          onRemoveTask={onRemoveTask}
          onToggleStatus={onToggleStatus} /> 
      ))}
    </ol>
  )
}

export default TaskList
