export interface User {
  id: string;
  name: string;
  token: string;
}

export interface UserForm {
  username: string;
  password: string;
}

export interface List {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}

export interface ListProps {
  users: User[];
  list: List[];
}

