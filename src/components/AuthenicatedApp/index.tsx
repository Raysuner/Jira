import Project from 'pages/Project'
import { useAuth } from 'components/AuthProvider'

export default function AuthenicatedApp() {
  const { logout } = useAuth()
  return (
    <>
      <button onClick={logout}>登出</button>
      <Project />
    </>
  )
}
