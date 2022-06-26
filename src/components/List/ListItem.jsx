import { CheckIcon } from "@heroicons/react/outline"
import React from "react"

const ListItem = ({
  taskTitle,
  taskDescription,
  taskStatus,
  taskTags,
  taskPriority,
  index,
}) => {
  const priorityArr = ["normal", "urgent", "sensitive"]
  const priorityClassNames =
    priorityArr[taskPriority] === "normal"
      ? `bg-green-200 border-green-500`
      : priorityArr[taskPriority] === "urgent"
      ? `bg-orange-200 border-orange-500`
      : `bg-red-200 border-red-500`

  return (
    <div
      key={`list-item-${index}`}
      className="container mx-auto px-6  mt-6 flex justify-between border-b-[1.5px] pb-4 border-gray-300"
    >
      <div className="flex gap-x-2 items-center cursor-pointer">
        <div className="group border-2 h-6 w-6 bg-orange-100 border-orange-400 shadow-lg shadow-orange-200 rounded-full cursor-pointer relative flex items-center justify-center transition-all ease-in-out duration-1000">
          <CheckIcon
            height={14}
            className="text-orange-100 scale-50 group-hover:scale-105 group-hover:text-orange-400"
          />
        </div>
        <div className="font-medium">{taskTitle}</div>
      </div>
      <div
        className={`relative z-10 text-xl font-medium h-4 w-4 rounded-full shadow-md border-[1.5px]  ${priorityClassNames}`}
      >
        {" "}
        <div className="absolute top-0 left-0 right-0 bottom-0 rounded-full bg-inherit scale-[2] animate-pulse"></div>
      </div>
    </div>
  )
}

export default ListItem
