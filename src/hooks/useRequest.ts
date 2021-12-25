import { request } from 'utils/request'
import { useAuth } from 'components/AuthProvider'

export const useRequest = () => {
  const { user } = useAuth()
  const token = user?.token
  return (...[endpoint, config]: Parameters<typeof request>) =>
    request(endpoint, { token, ...config })
}
