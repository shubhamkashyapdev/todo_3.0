import React, { useContext } from "react"
import TaskContext from "../../context/TaskContext"
import ListItem from "./ListItem"

const List = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <>
      {tasks.map((item, index) => (
        <>
          <ListItem taskTitle={item[1]} index={index} />
        </>
      ))}
    </>
  )
}

export default List
