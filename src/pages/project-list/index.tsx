import { memo, useEffect, useState } from 'react'

import qs from "qs"

import { BASE_URL } from "common/constants"
import { fixParams } from "utils/fix-params"
import { useDebounce } from "utils/custom-hooks"
import TQSearchBar from "./search-bar"
import TQList from "./list"

export default memo(function TQProjectList() {
  const [users, setUsers] = useState([])
  const [param, setParam] = useState({ name: "", personId: "" })
  const debouceParams = useDebounce(param, 200)
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/users`).then(async res => {
      if (res.ok) {
        setUsers(await res.json())
      } else {
        Promise.reject("users request failed")
      }
    })
  }, [])

  useEffect(() => {
    fetch(`${BASE_URL}/projects?${qs.stringify(fixParams(param))}`).then(async res => {
      if (res.ok) {
       setList(await res.json())
      } else {
        Promise.reject("projects request error")
      }
    })
  }, [debouceParams])

  return (
    <div>
      <TQSearchBar param={ param } setParam={setParam} users={users}></TQSearchBar>
      <TQList list={list} users={users}></TQList>
    </div>
  )
})
