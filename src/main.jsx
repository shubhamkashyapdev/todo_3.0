import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"

// context provider
import { TaskProvider } from "./context/TaskProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
)
