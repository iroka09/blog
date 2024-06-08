"use client"

import { useState, useEffect } from "react"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "@/components/redux/store"
import { changeName, changeAge } from "@/components/redux/userSlice"
import { usePathname } from "next/navigation"



export default function ({ state, children }) {
  const pathname = usePathname()
  useEffect(() => {
    window.eruda?.init()
  }, [])
  return (
    <ReduxProvider store={store} >
      {children}
    </ReduxProvider>
  )
}