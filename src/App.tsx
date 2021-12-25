import AuthenicatedApp from 'components/authenicated-app'
import UnauthenicatedApp from 'components/unauthenicated-app'
import { useAuth } from 'components/auth-provider'

function App() {
  const { user } = useAuth()
  return (
    <div className='App'>
      {user ? <AuthenicatedApp /> : <UnauthenicatedApp />}
    </div>
  )
}

export default App
