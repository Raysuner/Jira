import { FormEvent } from 'react'
import { useAuth } from 'components/auth-provider'

export default function Login() {
  const { login } = useAuth()
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({ username, password })
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          用户名: <input type='text' />
        </label>
      </div>
      <div>
        <label>
          密码: <input type='password' />
        </label>
      </div>
      <button type='submit'>登录</button>
    </form>
  )
}
