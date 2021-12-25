import { Button, Form, Input } from 'antd'

import { useAuth } from 'components/AuthProvider'
import { UserForm } from 'common/interface'

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
        <Button htmlType='submit' type='primary'>
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}
