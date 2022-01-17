import { useRequest } from 'hooks/useRequest'
import { Project } from "common/interface"
import { useAsync } from "hooks/useAsync"
import { useEffect } from "react"
import { fixParams } from 'utils/fixParams'

export function useProjectList(param?: Partial<Project>) {
  const request = useRequest()
  const {run, ...result} = useAsync<Project[]>()

  useEffect(() => {
    run(request('projects', { data: fixParams(param || {})}))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [param])

  return result
}