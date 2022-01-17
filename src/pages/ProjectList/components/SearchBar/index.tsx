import { Form, Input, Select } from 'antd'
import { User } from 'common/interface'

interface InputProps {
  userList: User[]
  param: {
    name: string
    personId: string
  }
  setParam: (param: InputProps['param']) => void
}

export default function SearchBar({ param, setParam, userList }: InputProps) {
  return (
    <Form layout="inline" style={{marginBottom: '2rem'}}>
      <Form.Item>
        <Input
          type='text'
          value={param.name}
          onChange={(e) =>
            setParam({
              ...param,
              name: e.target.value,
            })
          }
          placeholder="请输入项目名"
        />
      </Form.Item>
      <Form.Item>
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
          {userList.map((user) => {
            return (
              <Select.Option value={user.id} key={user.id}>
                {user.name}
              </Select.Option>
            )
          })}
        </Select>
      </Form.Item>
    </Form>
  )
}