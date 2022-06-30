import {
  ADD_NEW_TASK,
  CLOSE_ADD_TASK,
  GET_ALL_TASKS,
  OPEN_ADD_TASK,
  UPDATE_TASK,
  SET_ALL_TASKS,
} from "./TaskTypes"

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, payload],
      }
    case SET_ALL_TASKS:
      return {
        ...state,
        tasks: [...state.tasks, ...payload],
      }
    case UPDATE_TASK:
      const { id, data } = payload
      const tasks = [...state.tasks]
      const taskToUpdate = tasks.findIndex((task) => task.id === id)
      if (taskToUpdate === -1) {
        return {
          ...state,
          error: [...state.error, "Task Not Found To Update"],
        }
      }
      tasks[taskToUpdate] = data
      return {
        ...state,
        tasks: tasks,
      }
    case GET_ALL_TASKS:
      return {
        ...state,
        tasks: payload,
      }
    case OPEN_ADD_TASK:
      return {
        ...state,
        addTask: true,
      }
    case CLOSE_ADD_TASK:
      return {
        ...state,
        addTask: false,
      }
    default:
      return state
  }
}

export default reducer
