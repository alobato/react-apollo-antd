import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style/css'
import Icon from 'antd/lib/icon'
import 'antd/lib/icon/style/css'

export const UserSvg = () => <svg viewBox='0 0 24 24' width='16px' height='16px' fill='currentColor' style={{display: 'inline-block', pointerEvents: 'none', height: 16, width: 16, userSelect: 'none'}}><path d='M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 9 21 L 9 14 L 15 14 L 15 21 L 20 21 L 20 12 L 23 12 L 19 8.4003906 L 19 4 L 17 4 L 17 6.5996094 L 12 2.0996094 z' /></svg>

const LinkMenu = withRouter(props => {
  const { location } = props

  let selectedKey = location.pathname
  selectedKey = selectedKey.split('/')[1]
  selectedKey = `/${selectedKey}`
  
  return (
    <Menu mode='inline' theme='dark' inlineCollapsed={false} selectedKeys={[selectedKey]}>
      <Menu.Item key='/'>
        <Link to='/'><Icon component={UserSvg} /><span>Dashboard</span></Link>
      </Menu.Item>
      <Menu.Item key='/login'>
        <Link to='/login'><Icon component={UserSvg} /><span>Login</span></Link>
      </Menu.Item>
    </Menu>
  )
})

export default LinkMenu
