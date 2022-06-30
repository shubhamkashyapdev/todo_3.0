import React, { useState, useContext, useEffect } from "react"
import Card from "@components/Card"
import Header from "@components/Header"
import List from "@components/List/List"
import TopBar from "@components/TopBar"

// context
import TaskContext from "@context/TaskContext"
import Web3Context from "@context/web3/Web3Context"
const Home = () => {
  const { addTask } = useContext(TaskContext)
  const { loadWeb3, addNewTaskToChain, getAllTask, contract, ...web3 } =
    useContext(Web3Context)

  useEffect(() => {
    loadWeb3()
  }, [])
  useEffect(() => {
    if (contract) {
      getAllTask()
    }
  }, [contract])
  return (
    <>
      <div className="relative w-[90%] max-w-5xl mt-10 mx-auto">
        <div>
          <Header />
          <TopBar />
          <List />
        </div>
        {addTask && (
          <Card
            addNewTaskToChain={addNewTaskToChain}
            handleModal={() => setShow(false)}
          />
        )}
      </div>
    </>
  )
}

export default Home
