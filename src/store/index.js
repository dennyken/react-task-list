import { createStore } from 'redux'

const initialState = {
  taskLists: [{
    id: 0,
    title: 'Redux starter',
    tasks: [
      {
        id: 0,
        title: 'First task',
        isDone: true
      }
    ]
  }]
}

const taskListReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'ADD_TASK_LIST':
      return [...state, action.payload]
    default:
      return state
  }
}


const store = createStore(taskListReducer)

store.subscribe(() => console.log(store.getState()))

export { store }