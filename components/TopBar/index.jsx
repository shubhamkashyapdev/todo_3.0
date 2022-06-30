import { AdjustmentsIcon } from "@heroicons/react/outline"
import React from "react"

const TopBar = () => {
  return (
    <div className="container flex justify-between items-center px-6 mx-auto mt-6">
      <div className="flex gap-4 items-center">
        <h4 className="text-2xl font-bold tracking-wide">Today</h4>
        <h6 className="text-gray-500 font-regular text-[14px]">
          Sat 25th June, 2022
        </h6>
      </div>
      <div className="flex gap-x-2 items-center cursor-pointer">
        <AdjustmentsIcon height={16} className="text-indigo-700" />
        <span className="text-[14px] text-gray-600 ">Views</span>
      </div>
    </div>
  )
}

export default TopBar
