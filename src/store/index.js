import { createStore } from 'redux'

export const addTask = () => {
  return {
    type: 'ADD_TASK'
  }
}

export const removeTask = () => {
  return {
    type: 'REMOVE_TASK'
  }
}

const taskList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, 'tsk']
    case 'REMOVE_TASK':
      return [...state, 'ntsk']
  }
}

const store = createStore(taskList)

store.subscribe(() => console.log('action dispatched!', store.getState()))

export { store }

