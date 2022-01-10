import { useEffect, useState } from 'react'

import { useDebounce } from 'hooks/useDebounce'
import { useMount } from 'hooks/useMount'
import { useRequest } from 'hooks/useRequest'
import { fixParams } from 'utils/fix-params'
import SearchBar from './components/SearchBar'
import TableList from './components/TableList'

export default function Project() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({ name: '', personId: '' })
  const [list, setList] = useState([])
  const debouceParams = useDebounce(param, 200)
  const requestClient = useRequest()

  useMount(() => {
    requestClient('users').then(setUsers)
  })

  useEffect(() => {
    console.log('request projects')
    setLoading(true)
    requestClient('projects', { data: fixParams(debouceParams) })
      .then(setList)
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouceParams])

  return (
    <>
      <h2>项目列表</h2>
      <SearchBar param={param} setParam={setParam} users={users}></SearchBar>
      <TableList loading={loading} dataSource={list} users={users}></TableList>
    </>
  )
}
