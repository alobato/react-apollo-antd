import React, { Component } from 'react'

import Layout from 'antd/lib/layout'
import 'antd/lib/layout/style/css'
import Menu from 'antd/lib/menu'
import 'antd/lib/menu/style/css'
import Avatar from 'antd/lib/avatar'
import 'antd/lib/avatar/style/css'
import Dropdown from 'antd/lib/dropdown'
import 'antd/lib/dropdown/style/css'
import Icon from 'antd/lib/icon'
import 'antd/lib/icon/style/css'

const { Header, Content, Footer, Sider } = Layout

export default class BasicLayout extends Component {
  state = {
    collapsed: false
  }

  closeOrOpenMenu = e => {
    this.setState(prevState => ({collapsed: !prevState.collapsed}))
  }

  toggleMenu = collapsed => {
    this.setState({collapsed})
  }

  render() {
    const { children, menu } = this.props
    const { collapsed } = this.state

    const dropdownMenu = (
      <Menu>
        <Menu.Item>
          <Icon type='user' theme='outlined' />
          Minha conta
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => {}}>
          <Icon type='logout' theme='outlined' />
          Sair
        </Menu.Item>
      </Menu>
    )

    return (
      <Layout>

        <Sider collapsible collapsed={this.state.collapsed} breakpoint='lg' onBreakpoint={this.toggleMenu} onCollapse={this.toggleMenu}>
          <div>
            <a href='/'>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABlCAMAAABjot39AAABO1BMVEUVtfgSntkAAAAVtfgTot4Tp+QUquoUru8VtPcUru8Us/UVtfgVs/YVtfgVtfgVtfgTo+AVtfgVtfgVtfgTo+ASn9oVtfgTpeITpeIVtfgVtfgTpuMVtfgVtfgVtfgToNv////F6PZsxOkTodzx+v4VsvUipt4VtPcxrOAUr/A/suIUqun8/v8UsfJdvuYTp+YTo+D5/f/K6vcUrOwTot7u+Px8y+wYotzp9/3d8vpWu+YTpOH0+/7V7/siuPem2/Kh2fGDzu1xxukTpeMepN3j9PvQ7vt/1/u64/WM0e5gv+c4sOE1ruAoqd6w5v3Z8fyr5Py+5/l00vkqvPma1vCY1u8Ure12yOpqw+hcvebe9P531PtezPpVyfrM7Pk/wvk4wPmz4POu3vNuyvFNt+RIteNBs+I+suIpqd88g56gAAAAHnRSTlPM6gDl5N7Z1TYXxbeUjXpnDQL08e3pzc29qKKKWiM/j437AAAC5ElEQVRo3u3VZ3PaQBCAYUUkuMYlvWplC5CJREQz4IoxuDsucYvTe/L/f0EEe2GJc5Z9l1nPZEbv11v7gYMVhmma/Y8SFle3h56Mm6Zhjt+0eBscCBVEOLs3ZvRb/I0YDy3+EkbCuoIMS1KsxEqsxEqsxEqsxEqsxMp/pdhn82ure2sfoqew+d2dNwcaCjXTyOSipzB/56OGQqUq6YgpqvBSR6H2F2kqqjUdhVrtMnZk73QUat/C0tHK60sqq8+6fZ+drKdskbhzd1JWpWiL3l5OmYA/yhzZ2LS4s5wDspZ9HNtTU+jvBdNwccwDaRs4taupwJLYm6aFNaVKxsf9zGoqmXk82fJwLi2/sxpO5bUUejMnIF7nsQxpFXAzoaSpzOJJHZwcTgYSpSLuFcqunvICT4oA+TTeWfnvV1LAoSUAT0+B6c7JCgA08YVm2/aPr6fPRcvrtmgTwEnrKQviysOCzujil/WU/AFexRkdRWw2hHU+3DUkJM1Cu6yWMtGjONmD9/Z5NXB+7p/fC2QWzjMKyyA61v9c5ml7pH3aht+VXe3v2Ay0m/IlgL+yXpmCnjytfaGTje7P9FamWxXO5KR1d/+w95swvQ2RBcrKIZ68ErfXaRIuKKeotMQ//gntbKx1kdJUVDa6jzFSUnBhWSXl1Kc7UlHyCkq1IZCVqqICpQilONVt+9vmUY0etqqK40qVqOqgrICnqkxUNRRHUfmMiKICSkoN95FVWai0gFMp1Ir1ky2gdBV5JeiJQ8E8UEhVoYIrUdw5RoVK5zkVYsqMCpVzGBUq6zAqVIlToTxOhQpYFVobVoXWhlWhtWFVaG1YFVobRoUqcSqUx6lQAatCa8Oq0NqwKrQ2rAqtDatCa8OoUCVOhfLUFVeDCZSVhIVxro1jDFsY59rcMZ7ilbGuzWPDHLUwvrW5P2aY5ugtC2NZGyf/YMAMFXNgZMhQL3lN2t3rYTfCkslkX1/f4HB/KPwC2qjQhyXeeo8AAAAASUVORK5CYII=" alt='logo' />
              <h1>Logo</h1>
            </a>
          </div>
          {menu}
        </Sider>

        <Layout style={{minHeight: '100vh'}}>

          <Header style={{ background: 'white', paddingRight: '0 20px', lineHeight: '64px', height: 64 }}>
            <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} onClick={this.closeOrOpenMenu} theme='outlined' />
            <div>
              {localStorage.getItem('authUser') &&
                <Dropdown overlay={dropdownMenu}>
                  <span>
                    <Avatar src='https://www.belr.com/wp-content/uploads/2017/06/avatar-placeholder-generic-1.jpg' size='small' icon='user' />
                    <span>Olá</span>
                  </span>
                </Dropdown>
              }
            </div>
          </Header>

          <Content>
            {children}
          </Content>

          <Footer style={{textAlign: 'center'}}>
            ©2018
          </Footer>

        </Layout>

      </Layout>
    )
  }
}
