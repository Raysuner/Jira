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
      <input
        type='text'
        value={param.name}
        onChange={(e) =>
          setParam({
            ...param,
            name: e.target.value,
          })
        }
      />
      <select
        value={param.personId}
        onChange={(e) =>
          setParam({
            ...param,
            personId: e.target.value,
          })
        }
      >
        <option value=''>负责人</option>
        {users.map((user) => {
          return (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          )
        })}
      </select>
    </div>
  )
}
