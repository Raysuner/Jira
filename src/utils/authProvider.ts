import { User, UserForm } from 'common/interface'
import { API_URL } from 'common/constants'

const authKey = '__auth_provider_token__'

export const getToken = () => {
  const token = window.localStorage.getItem(authKey)
  if (token) {
    return token
  }
  return ''
}

export const setToken = (token: string) => {
  window.localStorage.setItem(authKey, token)
}

export const handleResponse = async ({ user }: { user: User }) => {
  setToken(user.token)
  return user
}

export const login = async (user: UserForm) => {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  if (res.ok) {
    return handleResponse(await res.json())
  } else {
    return Promise.reject(await res.json())
  }
}

export const register = async (user: UserForm) => {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  if (res.ok) {
    return handleResponse(await res.json())
  } else {
    return Promise.reject(await res.json())
  }
}

export const logout = async () => window.localStorage.removeItem(authKey)
