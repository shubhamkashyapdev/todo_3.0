import {
  CalendarIcon,
  ClockIcon,
  FlagIcon,
  InboxIcon,
  TagIcon,
} from "@heroicons/react/outline"
import React, { useContext, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TaskContext from "../../context/TaskContext"

const Card = () => {
  const { closeAddTask, addNewTask } = useContext(TaskContext)
  const [task, setTask] = useState({
    taskTitle: "",
    taskDescription: "",
  })
  const [taskTags, setTaskTags] = useState([])
  const [taskPriority, setTaskPriority] = useState(0)
  const [errors, setErrors] = useState(["Web3.0"])
  const priorityArr = ["normal", "urgent", "sensitive"]

  const handleTask = (e) => {
    setTask((prevTask) => {
      return {
        ...prevTask,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleClearState = () => {
    setTaskPriority({
      taskTitle: "",
      taskDescription: "",
    })
    setTaskPriority(0)
    setTaskTags(["Web3.0"])
    closeAddTask()
  }

  const handleAddTask = (e) => {
    console.log(task.taskTitle.length, task.taskDescription.length)

    if (task.taskTitle.length < 4) {
      setErrors((errors) => {
        return [...errors, "Title should be more than 3 characters long"]
      })
    }
    if (task.taskDescription.length < 10) {
      console.log("dec error")
      setErrors((errors) => {
        return [...errors, "Description should be at least 10 characters long"]
      })
    }
    if (task.taskDescription?.length >= 10 && task.taskTitle.length >= 4) {
      const data = { ...task, taskPriority, taskTags }
      addNewTask(data)
      //@todo - clear the state
      handleClearState()
    }
  }
  const handleCancel = () => {
    handleClearState()
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setErrors([])
    }, 2000)
    return () => {
      clearTimeout(timeout)
    }
  }, [errors])
  return (
    <>
      {errors.map((error) => (
        <motion.div
          drag
          dragElastic={0.1}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="absolute top-0 flex flex-col items-center gap-y-4 justify-center bg-green w-full"
        >
          <div className="bg-red-200 border-2 border-red-500 py-2 px-8 rounded-md shadow-md text-base font-medium text-red-700">
            Title should be more than 3 characters.
          </div>
        </motion.div>
      ))}
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="card"
          initial={{ y: -400, opacity: 0 }}
          animate={{ y: -100, opacity: 1 }}
          exit={{ y: -400, opacity: 0 }}
          className="container flex justify-center items-center absolute top-[90%]  z-20"
        >
          <div className="w-[60%] px-4 py-4 mx-auto shadow-2xl rounded-xl border-[1px] border-zinc-200 bg-white">
            <div className="">
              <input
                onChange={handleTask}
                name="taskTitle"
                className="flex w-full outline-none text-[14px] text-gray-500"
                type="text"
                placeholder="Keep track of every project and its deadlines!"
                minLength={4}
              />
              <textarea
                onChange={handleTask}
                name="taskDescription"
                minLength={10}
                rows={3}
                className="flex w-full outline-none text-[14px] text-gray  mt-2"
                placeholder="description"
              />
            </div>
            <div className="flex justify-between items-center my-2">
              <div className="flex gap-x-2">
                <button
                  onClick={() => setTaskPriority(0)}
                  className={`flex items-center gap-x-2 py-[2px] px-2 border-[1.5px] border-gray-400 rounded-md shadow-md text-white transition-all ease-in-out group hover:bg-green-500 ${
                    taskPriority === 0 ? "bg-green-500" : ""
                  }`}
                >
                  <CalendarIcon
                    className={` group-hover:text-white ${
                      taskPriority === 0 ? "text-white" : "text-gray-600"
                    }`}
                    height={14}
                  />
                  <span
                    className={`text-[14px] group-hover:text-white ${
                      taskPriority === 0 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    Sensitive
                  </span>
                </button>
                <button
                  onClick={() => setTaskPriority(1)}
                  className={`flex items-center gap-x-2 py-[2px] px-2 border-[1.5px] border-gray-400 rounded-md shadow-md text-white transition-all ease-in-out group hover:bg-orange-500 ${
                    taskPriority === 1 ? "bg-orange-500" : ""
                  }`}
                >
                  <CalendarIcon
                    className={` group-hover:text-white ${
                      taskPriority === 1 ? "text-white" : "text-gray-600"
                    }`}
                    height={14}
                  />
                  <span
                    className={`text-[14px] group-hover:text-white ${
                      taskPriority === 1 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    Urgent
                  </span>
                </button>
                <button
                  onClick={() => setTaskPriority(2)}
                  className={`flex items-center gap-x-2 py-[2px] px-2 border-[1.5px] border-gray-400 rounded-md shadow-md text-white transition-all ease-in-out group hover:bg-red-500 ${
                    taskPriority === 2 ? "bg-red-500" : ""
                  }`}
                >
                  <CalendarIcon
                    className={` group-hover:text-white ${
                      taskPriority === 2 ? "text-white" : "text-gray-600"
                    }`}
                    height={14}
                  />
                  <span
                    className={`text-[14px] group-hover:text-white ${
                      taskPriority === 2 ? "text-white" : "text-gray-600"
                    }`}
                  >
                    Sensitive
                  </span>
                </button>
              </div>
              <div className="flex gap-x-2 items-center">
                <a className="cursor-pointer">
                  <TagIcon
                    height={20}
                    className="text-gray-500 hover:text-indigo-500"
                  />
                </a>
                <a className="cursor-pointer">
                  <FlagIcon
                    height={20}
                    className="text-gray-500 hover:text-indigo-500"
                  />
                </a>
                <a className="cursor-pointer">
                  <ClockIcon
                    height={20}
                    className="text-gray-500 hover:text-indigo-500"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-end gap-x-2 items-center mt-2">
              <button
                onClick={handleCancel}
                className="py-[2px] px-3 rounded-md shadow-md bg-zinc-100 hover:bg-zinc-200  text-gray-500 hover:text-gray-700 border-[1.5px] border-gray-500 transition-all ease-in-out"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTask}
                className="py-[2px] px-3 rounded-md shadow-md bg-red-500 text-white border-[1.5px] border-red-500"
              >
                Add Task
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Card
