import React from 'react'



export default function HeaderLoginPage() {
  return (
    <div className="login-page-header">
           <div className="login-page-header__nav-bar">
           <div className="login-page-header__nav-bar-logo">
             <img class="logoTanD" src="../LogoT&D.png" alt="" />
           </div>
           <div className="login-page-header__nav-bar-list">
              <div className="login-page-header__nav-bar-list-item">
                <a href="/premium">Premium</a>
                </div>
              <div className="login-page-header__nav-bar-list-item">
                <a href="/support">Hổ Trợ</a>
                </div>
              <div className="login-page-header__nav-bar-list-item">
                <a href="/download">Tải xuống</a>
                </div>
              <div className="login-page-header__nav-bar-list-item">
                <a href="/registerpage">Đăng kí</a>
                </div>
              <div className="login-page-header__nav-bar-list-item">
                <a href="/signin">Đăng nhập</a>
                </div>
           </div>
           </div>
      </div>
  )
}
