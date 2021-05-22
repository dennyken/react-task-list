import { useState } from 'react'
import './TaskInput.scss'

const TaskInput = ({ 
  value,
  placeholder,
  onSubmit
}) => {
  const [input, setInput] = useState(value || '')

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    onSubmit(input)
    setInput('')
  }

  const handleKeyDown = e => {
    if(e.key === 'Enter') {
      onSubmit(input)
      setInput('')
    }
  }

  return (
    <div className="task-input">
      <input 
        type="text"
        value={input}
        placeholder={placeholder} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}>
      </input>
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}

export default TaskInput
