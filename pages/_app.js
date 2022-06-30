import "../styles/globals.css"
// context provider
import { TaskProvider } from "@context/TaskProvider"
import { Web3Provider } from "@context/web3/Web3Provider"

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Web3Provider>
        <Component {...pageProps} />
      </Web3Provider>
    </TaskProvider>
  )
}

export default MyApp
