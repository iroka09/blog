"use client"

import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeUsername, changePassword } from "@/components/redux/userSlice"
import { DispatchType, RootStateType } from "@/components/redux/store"



export default function () {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const user = useSelector((state: RootStateType) => state.user)
  const dispatch: DispatchType = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(changeUsername(username))
    dispatch(changePassword(password))
    console.log(username, password, rememberMe)
  }
  return (
    <section className="p-5">
      <form submit={handleSubmit} className="card mx-auto *:flex *:w-full space-y-2 my-5">
        <div>
          <input placeholder="Username..." value={username} onChange={e => setUsername(e.target.value)} className="input" />
        </div>
        <div>
          <input type="password" placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)} className="input" />
        </div>
        <div>
          <label className="flex w-fit gap-4 text-gray-600 transition hover:cursor-pointer hover:text-gray-800">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(x => !x)} /> <span>Remember Me</span>
          </label>
        </div>
        <div>
          <button className="btn btn-primary ml-auto block">Apply</button>
        </div>
      </form>

      <div className="card bg-pink-50 border-pink-200 text-pink-700 my-2">
        <h2>Username: {user.username}</h2>
        <h2>Password: {user.password}</h2>
      </div>

    </section>
  )
}