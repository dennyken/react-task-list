import './TaskList.scss'

const TaskList = ({ children }) => {
  return (
    <ol className="task-list">
      { children }
    </ol>
  )
}

export default TaskList
