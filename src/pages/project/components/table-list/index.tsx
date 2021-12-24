import { User } from "common/interface";

interface List {
  id: string;
  name: string;
  personId: string;
  organization: string;
  created: string;
}

interface ListProps {
  users: User[];
  list: List[];
}

export default function TableList({ list, users }: ListProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>项目名称</th>
          <th>负责人</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item) => {
          return (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>
                {users.find((user) => user.id === item.personId)?.name ||
                  "未知"}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
