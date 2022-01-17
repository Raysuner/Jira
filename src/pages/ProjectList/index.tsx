import { useState } from 'react'
import { Typography } from "antd"
import { useDebounce } from 'hooks/useDebounce'
import { useProjectList } from "./hooks/useProjectList"
import { useUserList } from "./hooks/useUserList"
import SearchBar from './components/SearchBar'
import TableList from './components/TableList'

export default function ProjectList() {
  const [param, setParam] = useState({ name: '', personId: '' })
  const debouceParams = useDebounce(param, 200)
  const { status, error, data: list } = useProjectList(debouceParams)
  const { data: userList } = useUserList()

  return (
    <>
      <h2>项目列表</h2>
      {error ? (
        <Typography.Text type={"danger"}>{error.message}</Typography.Text>
      ) : null}
      <SearchBar param={param} setParam={setParam} userList={userList ?? []}></SearchBar>
      <TableList loading={status === "pending"} dataSource={list ?? []} userList={userList ?? []}></TableList>
    </>
  )
}
