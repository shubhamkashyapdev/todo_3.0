import {
  CalendarIcon,
  ClockIcon,
  FlagIcon,
  InboxIcon,
  TagIcon,
} from "@heroicons/react/outline"
import React, { useContext } from "react"
import { motion, AnimatePresence } from "framer-motion"
import TaskContext from "../../context/TaskContext"

const Card = () => {
  const { closeAddTask } = useContext(TaskContext)
  return (
    <AnimatePresence exitBeforeEnter presenceAffectsLayout={true}>
      <motion.div
        key="card"
        initial={{ y: -400, opacity: 0 }}
        animate={{ y: -100, opacity: 1 }}
        exit={{ y: -400, opacity: 0 }}
        className="container flex justify-center items-center absolute top-[100%]  z-20"
      >
        <div className="w-[60%] px-4 py-4 mx-auto shadow-2xl rounded-xl border-[1px] border-zinc-200 bg-white">
          <div className="">
            <input
              className="flex w-full outline-none text-[14px] text-gray-500"
              type="text"
              placeholder="Keep track of every project and its deadlines!"
            />
            <textarea
              rows={3}
              className="flex w-full outline-none text-[14px] text-gray  mt-2"
              placeholder="description"
            />
          </div>
          <div className="flex justify-between items-center my-2">
            <div className="flex gap-x-2">
              <button className="flex items-center gap-x-2 py-[2px] px-2 border-[1.5px] border-gray-400 rounded-md shadow-md hover:bg-indigo-500 text-white transition-all ease-in-out group">
                <InboxIcon
                  className="text-gray-600 group-hover:text-white"
                  height={14}
                />
                <span className="text-[14px] text-gray-600 group-hover:text-white">
                  Inbox
                </span>
              </button>
              <button className="flex items-center gap-x-2 py-[2px] px-2 border-[1.5px] border-gray-400 rounded-md shadow-md hover:bg-indigo-500 text-white transition-all ease-in-out group">
                <CalendarIcon
                  className="text-gray-600 group-hover:text-white"
                  height={14}
                />
                <span className="text-[14px] text-gray-600 group-hover:text-white">
                  Today
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
              onClick={closeAddTask}
              className="py-[2px] px-3 rounded-md shadow-md bg-zinc-100 hover:bg-zinc-200  text-gray-500 hover:text-gray-700 border-[1.5px] border-gray-500 transition-all ease-in-out"
            >
              Cancel
            </button>
            <button
              onClick={closeAddTask}
              className="py-[2px] px-3 rounded-md shadow-md bg-red-500 text-white border-[1.5px] border-red-500"
            >
              Add Task
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Card
