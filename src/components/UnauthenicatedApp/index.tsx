import { useState } from 'react'

import { Card, Divider } from 'antd'
import styled from '@emotion/styled'

import Login from './components/login'
import Register from './components/register'
import logo from 'assets/img/logo.svg'
import leftImage from 'assets/img/left.svg'
import rightImage from 'assets/img/right.svg'

export default function UnauthenicatedApp() {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  return (
    <Container className='card'>
      <Header />
      <ShadowCard>
        {isLogin ? <Login /> : <Register />}
        <Divider />
        <a href='javascript: void(0)' onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? '没有账号?去注册' : '已经有帐号了?直接登录'}
        </a>
      </ShadowCard>
      <Background />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: left bottom, right bottom;
  background-size: calc(((100vw - 40rem) / 2) - 3.2rem),
    calc(((100vw - 40rem) / 2) - 3.2rem);
  background-image: url(${leftImage}), url(${rightImage});
  z-index: -1;
`

const Header = styled.header`
  background: url(${logo}) no-repeat center;
  width: 100%;
  padding: 5em 0;
  background-size: 12rem;
`

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 50rem;
  padding: 3.2rem 4rem;
  text-align: center;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 5px;
`
