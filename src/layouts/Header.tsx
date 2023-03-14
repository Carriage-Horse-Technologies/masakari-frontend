// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import LoginButton from '@/components/auth/login'
import { User } from '@auth0/auth0-react'
import LogoutButton from '@/components/auth/logout'

const Header = () => {
  return (
    <div className="header">
      <div
        className={'d-flex flex-row align-content-center align-items-center'}
      >
        <div className="title" style={style.header}>
          まさかりを投げてサーバーを倒せ
        </div>
      </div>
    </div>
  )
}

const style = {
  header: {
    flex: '1',
    fontWeight: '700',
    fontSize: '4rem',
    fontFamily: 'DotGothic16',
  },
  title: {
    fontSize: '48px',
    fontWeight: '700',
  },
  userIcon: {
    height: '50px',
    borderRadius: '50%',
  },
}
export default Header
