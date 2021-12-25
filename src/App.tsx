import AuthenicatedApp from 'components/AuthenicatedApp'
import UnauthenicatedApp from 'components/UnauthenicatedApp'
import { useAuth } from 'components/AuthProvider'

function App() {
  const { user } = useAuth()
  return (
    <div className='App'>
      {user ? <AuthenicatedApp /> : <UnauthenicatedApp />}
    </div>
  )
}

export default App
