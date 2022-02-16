import React from 'react'
import { Button } from '@mui/material'
import "./assets/loginpage.css"


export default function LoginPage() {
  return (
    <div className='LoginPage'>
      <div className="login-page-header">
           <div className="login-page-header__nav-bar">
           <div className="login-page-header__nav-bar-logo">
             logo here
           </div>
           <div className="login-page-header__nav-bar-list">
              <div className="login-page-header__nav-bar-list-item">Premium</div>
              <div className="login-page-header__nav-bar-list-item">Hổ Trợ</div>
              <div className="login-page-header__nav-bar-list-item">Tải xuống</div>
              <div className="login-page-header__nav-bar-list-item">Đăng kí</div>
              <div className="login-page-header__nav-bar-list-item">Đăng nhập</div>
           </div>
           </div>
      </div>

      <div className="login-page-body">
      <div className="login-page-body__description">
        Nghe đa chiều, sống đa sắc
      </div>
      <div className="login-page-body__sub-description">
      Hàng triệu bài hát và podcast. Không cần thẻ tín dụng.
      </div>
      <div className="login-page-body__btn">
        Tải spotify miễn phí
      </div>
      </div>

     <div className="login-page-footer">

     </div>
    </div>
  )
}
// 