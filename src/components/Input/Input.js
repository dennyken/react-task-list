import { useEffect, useRef, useState } from 'react'
import './Input.scss'

const Input = ({ 
  value,
  placeholder,
  onSubmit,
  buttonText,
  autoClear,
  focused
}) => {
  const [input, setInput] = useState(value || '')

  const inputRef = useRef(null)

  useEffect(() => {
    focused ? inputRef.current.focus() : null
  }, [])

  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    onSubmit(input)
    if (autoClear) setInput('')
  }

  const handleKeyDown = e => {
    if(e.key === 'Enter') {
      onSubmit(input)
      if (autoClear) setInput('')
    }
  }

  return (
    <div className="input">
      <input 
        ref={inputRef}
        type="text"
        value={input}
        placeholder={placeholder} 
        onChange={handleChange}
        onKeyDown={handleKeyDown}>
      </input>
      <button onClick={handleSubmit}>{buttonText}</button>
    </div>
  )
}

export default Input
