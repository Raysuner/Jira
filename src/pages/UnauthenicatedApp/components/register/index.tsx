import { Form, Input } from 'antd'

import { useAuth } from 'context/AuthProvider'
import { UserForm } from 'common/interface'
import { LongButton } from "pages/UnauthenicatedApp"

export default function Register() {
  const { register } = useAuth()
  const handleSubmit = (values: UserForm) => {
    register(values)
  }
  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={'username'}
        rules={[{ required: true, message: '用户名不能为空' }]}
      >
        <Input type='text' placeholder='用户名' />
      </Form.Item>
      <Form.Item
        name={'password'}
        rules={[{ required: true, message: '密码不能为空' }]}
      >
        <Input type='password' placeholder='密码' />
      </Form.Item>
      <Form.Item>
        <LongButton htmlType='submit' type='primary'>
          注册
        </LongButton>
      </Form.Item>
    </Form>
  )
}
