import React from "react"
import { useRoutes } from "react-router-dom"
import routes from "./router/index"
import style from "./App.module.css"

export default function App() {
  const router = useRoutes(routes)
  return <div className={style.page}>{router}</div>
}
