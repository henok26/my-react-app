import React from 'react'
import {Outlet} from "react-router-dom"

export default function Layout() {
  return (
    <div>
      <div bg-sky-200>sidebar</div>
      <div bg-red>header</div>
      <div bg-blue>{<Outlet/>}</div>
    </div>
  )
}
