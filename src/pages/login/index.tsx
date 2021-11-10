import { memo, FormEvent } from 'react'

import { BASE_URL } from "common/constants"
import { UserForm } from "common/interface"

export default memo(function TQLogin() {
  const login = (user: UserForm) => {
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(async res => {
      if (res.ok) {
      } else {
        Promise.reject("users request failed")
      }
    })

  }
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const username = (event.currentTarget.elements[0] as HTMLInputElement).value
    const password = (event.currentTarget.elements[1] as HTMLInputElement).value
    login({username, password})
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>用户名：<input type="text"/></label>
      </div>
      <div>
        <label>密码：<input type="password"/></label>
      </div>
      <button type="submit">登录</button>
    </form>
  )
})
