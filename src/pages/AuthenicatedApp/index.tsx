import {ReactComponent as SoftwareLogo} from "assets/img/software-logo.svg"

import styled from '@emotion/styled'
import { Dropdown, Menu } from "antd"

import Project from 'pages/Project'
import { useAuth } from 'context/AuthProvider'
import { Row } from "components/Row"

export default function AuthenicatedApp() {
  const { logout, user } = useAuth()
  return (
    <Container>
      <Header marginBottom='2rem' between={true}>
        <HeaderLeft itemGap='2rem'>
          <SoftwareLogo width={'18rem'} color="rgb(38, 132, 255)"/>
          <h3>项目</h3>
          <h3>用户</h3>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown overlay={
            <Menu>
              <Menu.Item>
                <a onClick={logout}>登出</a>
              </Menu.Item>
            </Menu>}>
            <a onClick={e => e.preventDefault()}>Hi, { user?.name }</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Project />
    </Container>
  )
}

const Container = styled.div`
  margin: 0 20rem;
`

const Header = styled(Row)`
  padding: 3.2rem 0;
  box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.1);
`

const HeaderLeft = styled(Row)`
`

const HeaderRight = styled.span``
