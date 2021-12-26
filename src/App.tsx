import AuthenicatedApp from 'pages/AuthenicatedApp'
import UnauthenicatedApp from 'pages/UnauthenicatedApp'
import { useAuth } from 'context/AuthProvider'

function App() {
  const { user } = useAuth()
  return (
    <div className='App'>
      {user ? <AuthenicatedApp /> : <UnauthenicatedApp />}
    </div>
  )
}

export default App
