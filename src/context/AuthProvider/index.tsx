import { createContext, ReactElement, useContext, useState } from 'react'

import { request } from 'utils/request'
import { User, UserForm } from 'common/interface'
import { useMount } from 'hooks/useMount'
import * as auth from 'utils/auth-provider'
import { QueryClient, QueryClientProvider } from "react-query"

const AuthContext = createContext<{
  user: User | null
  login: (form: UserForm) => Promise<void>
  register: (form: UserForm) => Promise<void>
  logout: () => Promise<void>
} | null>(null)

AuthContext.displayName = 'AuthContext'

const initUser = async () => {
  let user = null
  const token = auth.getToken()
  if (token) {
    const res = await request('me', { token })
    user = res.user
  }
  return user
}

export default function AuthProvider({ children }: { children: ReactElement }) {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: UserForm) => auth.login(form).then(setUser)
  const register = (form: UserForm) => auth.register(form).then(setUser)
  const logout = () => auth.logout().then(() => setUser(null))

  useMount(() => {
    initUser().then(setUser)
  })

  return (
    <QueryClientProvider client={new QueryClient()}>
      <AuthContext.Provider
        value={{ user, login, register, logout }}
        children={children}
      ></AuthContext.Provider>
    </QueryClientProvider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context) {
    return context
  }
  throw new Error('useAuth必须在AuthProvider中使用')
}
