import React, { useContext } from "react"
import TaskContext from "../../context/TaskContext"
import {
  CalculatorIcon,
  CalendarIcon,
  FilterIcon,
  InboxInIcon,
  PlusIcon,
} from "@heroicons/react/outline"
const Header = () => {
  const { openAddTask } = useContext(TaskContext)

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">dev1800</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base">
          <a className="mr-5 hover:text-indigo-700 cursor-pointer flex items-center  gap-x-2">
            <InboxInIcon style={{ height: "16px" }} fontSize={16} />{" "}
            <span>Inbox</span>
          </a>
          <a className="mr-5 hover:text-indigo-700 cursor-pointer flex items-center  gap-x-2">
            <CalendarIcon style={{ height: "16px" }} fontSize={16} />{" "}
            <span>Today</span>
          </a>
          <a className="mr-5 hover:text-indigo-700 cursor-pointer flex items-center  gap-x-2">
            <CalculatorIcon style={{ height: "16px" }} fontSize={16} />{" "}
            <span>Upcoming</span>
          </a>
          <a className="mr-5 hover:text-indigo-700 cursor-pointer flex items-center  gap-x-2">
            <FilterIcon style={{ height: "16px" }} fontSize={16} />{" "}
            <span>Filters & Labels</span>
          </a>
        </nav>
        <button
          onClick={openAddTask}
          className=" group inline-flex items-center border-indigo-700 bg-gray-100 text-indigo-700 border-2 py-1 px-3 focus:outline-none hover:bg-indigo-700 hover:text-white rounded text-base mt-4 md:mt-0 transition-all ease-in-out duration-150"
        >
          Add New
          <PlusIcon className="w-4 h-4 ml-1 text-indigo-700 group-hover:text-white" />
        </button>
      </div>
    </header>
  )
}

export default Header
