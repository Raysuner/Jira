import { TableProps } from "antd";

export interface User {
  id: string
  name: string
  token: string
}

export interface UserForm {
  username: string
  password: string
}

export interface Project {
  id: string
  name: string
  personId: string
  organization: string
  created: string
}

export interface ProjectList extends TableProps<Project>{
  userList: User[]
}

export interface RequestConfig extends RequestInit {
  data?: { [key: string]: unknown }
  token?: string
}

export interface State<T> {
  error: Error | null
  data: T | null
  status: 'idle' | 'pending' | 'error' | 'success'
}