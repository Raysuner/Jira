import { useEffect, useState } from "react";

import qs from "qs";

import { API_URL } from "common/constants";
import { fixParams } from "utils/fix-params";
import { useDebounce } from "hooks/useDebounce";
import SearchBar from "./components/search-bar";
import TableList from "./components/table-list";

export default function Project() {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({ name: "", personId: "" });
  const [list, setList] = useState([]);
  const debouceParams = useDebounce(param, 200);

  useEffect(() => {
    fetch(`${API_URL}/users`).then(async (res) => {
      if (res.ok) {
        setUsers(await res.json());
      } else {
        Promise.reject("请求用户失败");
      }
    });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/projects?${qs.stringify(fixParams(debouceParams))}`).then(
      async (res) => {
        if (res.ok) {
          setList(await res.json());
        } else {
          Promise.reject("请求项目失败");
        }
      }
    );
  }, [debouceParams]);

  return (
    <>
      <SearchBar param={param} setParam={setParam} users={users}></SearchBar>
      <TableList list={list} users={users}></TableList>
    </>
  );
}
