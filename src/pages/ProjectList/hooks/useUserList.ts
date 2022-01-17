import { useEffect } from "react"
import { useAsync } from "hooks/useAsync"
import { useRequest } from 'hooks/useRequest'
import { User } from "common/interface"

export function useUserList() {
  const request = useRequest()
  const {run, ...result} = useAsync<User[]>()

  useEffect(() => {
    run(request("users"))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return result
}