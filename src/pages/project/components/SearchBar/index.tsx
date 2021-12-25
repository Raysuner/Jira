import { Input, Select } from 'antd'
import { User } from 'common/interface'

interface InputProps {
  users: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: InputProps['param']) => void
}

export default function SearchBar({ param, setParam, users }: InputProps) {
  return (
    <div>
      <Input
        type='text'
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <Select
        value={param.personId}
        onChange={(value) =>
          setParam({
            ...param,
            personId: value,
          })
        }
      >
        <Select.Option value=''>负责人</Select.Option>
        {users.map((user) => {
          return (
            <Select.Option value={user.id} key={user.id}>
              {user.name}
            </Select.Option>
          )
        })}
      </Select>
    </div>
  )
}
