import { useContext, useReducer, useState } from "react"
import {
  ADD_NEW_TASK,
  CLOSE_ADD_TASK,
  GET_ALL_TASKS,
  OPEN_ADD_TASK,
  SET_ALL_TASKS,
  UPDATE_TASK,
} from "./TaskTypes"
import TaskContext from "./TaskContext"
import reducer from "./TaskReducer"
import Web3Context from "./web3/Web3Context"
const initialState = {
  loading: false,
  error: [],
  tasks: [
    [
      "Complete Jobs-bharo Documentation",

      "Complete the jobs-bharo documentation, inlucde the milestones, tech stask, pricing and timeline for the project.",
      1,
      ["React.js", "MERN Stack"],
      true,
    ],
    [
      "Setup Wannabae For Meeting",

      "Setup the wannabae app for the meeting, check if all the screens are working fine and the API integrations are working properly. Create teh APP apk build and send to Utkarsh Sir.",
      2,
      ["React Native", "Expo"],
      true,
    ],
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

  const setTasks = (data) => {
    console.log({ data })
    dispatch({ type: SET_ALL_TASKS, payload: data })
  }

  const taskState = {
    ...state,
    openAddTask,
    closeAddTask,
    addNewTask,
    updateTask,
    setTasks,
  }
  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  )
}
