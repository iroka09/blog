"use client"

import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { changeUsername, changePassword } from "@/components/redux/userSlice"
import { DispatchType, RootStateType } from "@/components/redux/store"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



function CardWithForm() {
  return (
    <Card className="w-[350px] max-w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Framework</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Next.js</SelectItem>
                  <SelectItem value="sveltekit">SvelteKit</SelectItem>
                  <SelectItem value="astro">Astro</SelectItem>
                  <SelectItem value="nuxt">Nuxt.js</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}


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
      <CardWithForm />
      <form onSubmit={handleSubmit} className="card *:flex *:w-full space-y-3 my-5">
        <div>
          <Input placeholder="Username..." value={username} onChange={e => setUsername(e.target.value)} className="focus:border-teal-300 focus:ring-4 focus:ring-teal-200" />
        </div>
        <div>
          <Input type="password" placeholder="Password..." value={password} onChange={e => setPassword(e.target.value)} className="focus:border-teal-300 focus:ring-4 focus:ring-teal-200" />
        </div>
        <div>
          <label className="flex w-fit gap-4 text-gray-600 transition hover:cursor-pointer hover:text-gray-800">
            <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(x => !x)} /> <span>Remember Me</span>
          </label>
        </div>
        <div>
          <Button className="ml-auto block bg-teal-500">Login</Button>
        </div>
        <div>
          <p className="text-gray-500 [&:hover]:bg-amber-300 [border:_1px_solid_red] text-base">
            Don't have an account? <a href="#" className="text-blue-400">Sign up</a>.If you have any problem while trying to create account you can reach us via this <a href="#" className="text-blue-400">link</a>
          </p>
        </div>
      </form>

      <div className="card bg-pink-50 border-pink-200 text-pink-700 my-2">
        <h2>Username: {user.username}</h2>
        <h2>Password: {user.password}</h2>
      </div>

    </section>
  )
}