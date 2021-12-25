import { useState } from 'react'
import Login from './components/login'
import Register from './components/register'

export default function UnauthenicatedApp() {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  return (
    <>
      {isLogin ? <Login /> : <Register />}
      <button onClick={() => setIsLogin(!isLogin)}>
        转到{isLogin ? '注册' : '登录'}
      </button>
    </>
  )
}
