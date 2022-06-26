import { useReducer, useState } from "react"
import {
  ADD_NEW_TASK,
  CLOSE_ADD_TASK,
  GET_ALL_TASKS,
  OPEN_ADD_TASK,
  UPDATE_TASK,
} from "./TaskTypes"
import TaskContext from "./TaskContext"
import reducer from "./TaskReducer"
const initialState = {
  loading: false,
  error: [],
  tasks: [
    {
      taskTitle: "Complete Jobs-bharo Documentation",
      taskDescription:
        "Complete the jobs-bharo documentation, inlucde the milestones, tech stask, pricing and timeline for the project.",
      taskPriority: 1,
      taskTags: ["React.js", "MERN Stack"],
      taskStatus: "pending",
    },
    {
      taskTitle: "Setup Wannabae For Meeting",
      taskDescription:
        "Setup the wannabae app for the meeting, check if all the screens are working fine and the API integrations are working properly. Create teh APP apk build and send to Utkarsh Sir.",
      taskPriority: 2,
      taskTags: ["React Native", "Expo"],
      taskStatus: "pending",
    },
  ],
  addTask: false,
}

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openAddTask = () => {
    dispatch({ type: OPEN_ADD_TASK })
  }
  const closeAddTask = () => {
    dispatch({ type: CLOSE_ADD_TASK })
  }

  const addNewTask = (data) => {
    dispatch({ type: ADD_NEW_TASK, payload: data })
  }
  const updateTask = (id, data) => {
    dispatch({ type: UPDATE_TASK, payload: { id, data } })
  }

  const taskState = {
    ...state,
    openAddTask,
    closeAddTask,
    addNewTask,
    updateTask,
  }
  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  )
}
