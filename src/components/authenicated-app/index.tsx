import Project from 'pages/project'
import { useAuth } from 'components/auth-provider'

export default function AuthenicatedApp() {
  const { logout } = useAuth()
  return (
    <>
      <button onClick={logout}>登出</button>
      <Project />
    </>
  )
}
