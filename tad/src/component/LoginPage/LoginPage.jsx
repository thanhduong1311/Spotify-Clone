import React from 'react'
import { Button } from '@mui/material'
import "./assets/loginpage.css"

import HeaderLoginPage from '../MainLayout/HeaderLoginPage';
import FooterLoginPage from '../MainLayout/FooterLoginPage';


export default function LoginPage() {
  return (
    <>
    <div className='LoginPage'>
      <HeaderLoginPage/>

      <div className="login-page-body">
      <div className="login-page-body__description">
       Chúng tôi ở đây đem đến nỗi buồn cho bạn
      </div>
      <div className="login-page-body__sub-description">
      DEV còn FA nên không chỉ có nhạc thất tình
      </div>
      <div className="login-page-body__btn">
        Tải T & D miễn phí
      </div>
      </div>

   <FooterLoginPage/>

    </div>
  </>
  )
}
// 