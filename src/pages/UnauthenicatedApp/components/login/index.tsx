import { Form, Input } from 'antd'
import { useAuth } from 'context/AuthProvider'
import { UserForm } from 'common/interface'
import { LongButton } from "pages/UnauthenicatedApp"
import { useAsync } from "hooks/useAsync"

export default function Login({setError}: {setError: (error: Error) => void}) {
  const { login } = useAuth()
  const { status, run } = useAsync(undefined, {throwError: true})
  const handleSubmit = (values: UserForm) => {
    run(login(values)).catch(setError)
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
        <LongButton loading={status === 'pending'} htmlType='submit' type='primary'>
          登录
        </LongButton>
      </Form.Item>
    </Form>
  )
}
