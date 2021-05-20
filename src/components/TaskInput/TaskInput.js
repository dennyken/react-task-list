import { useState } from 'react';

import './TaskInput.scss'

const TaskInput = ({ onSubmit: submit }) => {
  
  let [value, setValue] = useState("")

  const onChangeHandler = e => {
    setValue(e.target.value)
  }

  const onKeyDownHandler = e => {
    if(e.key === 'Enter') submitValue(value)
  }

  const onClickHandler = () => {
    submitValue(value)
  }

  const submitValue = (value) => {
    if(!(value == null || value.match(/^\s*$/))) {
      submit(value.trim())

      setValue('')
    }
  }


  return (
    <div className="task-input">
      <input 
        placeholder="Start adding tasks by typing here" 
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        value={value}>
      </input>
      <button onClick={onClickHandler}>Add</button>
    </div>
  )
}

export default TaskInput
