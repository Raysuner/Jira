import { useState } from "react"
import Login from "./components/login"
import Register from "./components/register"

export default function UnauthenicatedApp() {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  return (
    <>
      {
        isLogin ? <Login /> : <Register />
      }
      <button onClick={() => setIsLogin(!isLogin)}>{ isLogin ? "登录" : "注册" }</button>
    </>
  )
}

