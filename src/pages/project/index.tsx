import { useEffect, useState } from 'react'

import { fixParams } from 'utils/fix-params'
import { useDebounce } from 'hooks/useDebounce'
import { useMount } from 'hooks/useMount'
import { useRequest } from 'hooks/useRequest'
import SearchBar from './components/SearchBar'
import TableList from './components/TableList'

export default function Project() {
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
    requestClient('projects', { data: fixParams(debouceParams) }).then(setList)
  }, [debouceParams])

  return (
    <>
      <h2>项目列表</h2>
      <SearchBar param={param} setParam={setParam} users={users}></SearchBar>
      <TableList list={list} users={users}></TableList>
    </>
  )
}
