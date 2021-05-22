import './TaskInput.scss'

const TaskInput = ({ 
  value,
  placeholder,
  onSubmit, 
  onChange
}) => {

  const onKeyDownHandler = e => {
    if(e.key === 'Enter') onSubmit()
  }

  return (
    <div className="task-input">
      <input 
        value={value}
        placeholder={placeholder} 
        onChange={onChange}
        onKeyDown={onKeyDownHandler}>
      </input>
      <button onClick={onSubmit}>Add</button>
    </div>
  )
}

export default TaskInput
