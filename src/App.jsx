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
      <div>
        <div>
          <Header />
          <TopBar />
          <List />
        </div>
      </div>
      {addTask && <Card handleModal={() => setShow(false)} />}
    </>
  )
}

export default App
