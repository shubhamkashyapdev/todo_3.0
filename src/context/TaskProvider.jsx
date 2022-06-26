import { useState } from "react"
import TaskContext from "./TaskContext"

export const TaskProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState([])
  const [tasks, setTasks] = useState([
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
  ])
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
