import { CheckIcon } from "@heroicons/react/outline"
import React from "react"

const ListItem = ({ index }) => {
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
        <div className="font-medium">Setup Jobs-bharo Application</div>
      </div>
      <div className="text-xl font-medium">Personal</div>
    </div>
  )
}

export default ListItem
