import { useState } from "react"
import TaskContext from "./TaskContext"

export const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  const [tasks, setTasks] = useState([])
  const [addTask, setAddTask] = useState(false)

  const AddNewTask = ({
    taskTitle,
    taskDescription,
    taskCateogryNum,
    taskTags,
  }) => {
    const task = { taskTitle, taskDescription, taskCateogryNum, taskTags }
    if (
      typeof taskTitle !== String ||
      typeof taskDescription !== String ||
      typeof taskTags !== String ||
      typeof taskCateogryNum !== Number
    ) {
      setError((prevError) => {
        return [...prevError, "Invalid Task Date Provided"]
      })
    } else {
      setTasks((prevTasks) => {
        return [...prevTasks, task]
      })
    }
  }

  const openAddTask = () => {
    setAddTask(true)
  }
  const closeAddTask = () => {
    setAddTask(false)
  }

  const state = { loading, error, tasks, addTask }
  const actions = { AddNewTask, openAddTask, closeAddTask }
  const taskState = { ...state, ...actions }
  return (
    <TaskContext.Provider value={taskState}>{children}</TaskContext.Provider>
  )
}
