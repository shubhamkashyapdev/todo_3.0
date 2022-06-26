import React, { useState, useContext } from "react"
import Card from "./components/Card"
import Header from "./components/Header"
import List from "./components/List/List"
import TopBar from "./components/TopBar"

// context
import TaskContext from "./context/TaskContext"
const App = () => {
  const { addTask } = useContext(TaskContext)
  return (
    <>
      <div className="relative w-[90%] max-w-5xl mt-10 mx-auto">
        <div>
          <Header />
          <TopBar />
          <List />
        </div>
        {addTask && <Card handleModal={() => setShow(false)} />}
      </div>
    </>
  )
}

export default App
