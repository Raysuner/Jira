import { logout } from './authProvider'
import { API_URL } from 'common/constants'
import { RequestConfig } from 'common/interface'
import qs from 'qs'

export const request = async (
  endpoint: string,
  { token, data, ...restConfig }: RequestConfig = {}
) => {
  const cfg = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token ? token : ''}`,
      'Content-Type': 'application/json',
    },
    ...restConfig,
  }
  if (cfg.method.toUpperCase() === 'GET') {
    endpoint += `?${qs.stringify(data ?? {})}`
  } else {
    cfg.body = JSON.stringify(data ?? {})
  }

  const response = await window.fetch(`${API_URL}/${endpoint}`, cfg)
  if (response.status === 401) {
    await logout()
    window.location.reload()
    return Promise.reject('请重新登录')
  }
  const data_1 = await response.json()
  if (data_1) {
    return data_1
  } else {
    return Promise.reject(data_1)
  }
}
