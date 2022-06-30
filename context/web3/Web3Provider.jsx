import { useContext, useReducer } from "react"
import { reducer } from "./Web3Reducer"
import detectEthereumProvider from "@metamask/detect-provider"
import Web3 from "web3"
import { loadContract } from "@utils/loadContract"
import Web3Context from "./Web3Context"
import { LOAD_WEB3_FAILED, LOAD_WEB3_SUCCESS } from "./Web3Types"
import TaskContext from "@context/TaskContext"
const initialState = {
  web3: null,
  provider: null,
  contract: null,
  loading: false,
  error: null,
}

export const Web3Provider = ({ children }) => {
  const { setTasks } = useContext(TaskContext)
  const [state, dispatch] = useReducer(reducer, initialState)

  const loadWeb3 = async () => {
    console.log("load web3")
    const provider = await detectEthereumProvider()
    if (provider) {
      console.log("provider")
      const contract = await loadContract("Task", provider)
      dispatch({
        type: LOAD_WEB3_SUCCESS,
        payload: {
          web3: new Web3(provider),
          provider: provider,
          contract: contract,
        },
      })
    } else {
      console.log("Please install metamask")
      dispatch({
        type: LOAD_WEB3_FAILED,
        payload: "Please install metamask",
      })
    }
  }
  const isCalled = false
  const getAllTask = async () => {
    console.log({ contract: state.contract })
    if (!isCalled) {
      isCalled = true
      const tasks = await state.contract.getAllTasks()
      setTasks(tasks)
    }
  }
  const addNewTaskToChain = async (data) => {
    try {
      const accounts = await state.web3.eth.requestAccounts()
      console.log(data[0], data[1])
      const task = await state.contract.addTask(
        data[0],
        data[1],
        data[2],
        data[3],
        {
          from: accounts[0],
        }
      )
      console.log({ task })
    } catch (error) {
      console.log({ error })
    }
  }

  const web3State = { ...state, loadWeb3, getAllTask, addNewTaskToChain }

  return (
    <Web3Context.Provider value={web3State}>{children}</Web3Context.Provider>
  )
}
