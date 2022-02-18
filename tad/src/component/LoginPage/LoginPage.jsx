import React from 'react'
import { Button } from '@mui/material'
import "./assets/loginpage.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function LoginPage() {
  return (
    <div className='LoginPage'>
      <div className="login-page-header">
           <div className="login-page-header__nav-bar">
           <div className="login-page-header__nav-bar-logo">
             <img src="" alt="" />
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
        Tải T & D miễn phí
      </div>
      </div>

     <div className="login-page-footer">
         <div className="login-page-footer__grid">
           <div className="login-page-footer__grid col col-2">LOGO</div>
           <div className="login-page-footer__grid col col-2">CÔNG TY
           <div className="login-page-footer__grid-item">
             Giới Thiệu
           </div>
           </div>
           <div className="login-page-footer__grid col col-2">CỘNG ĐỒNG
           <div className="login-page-footer__grid-item">
             Dành cho nghệ sĩ
           </div>
           <div className="login-page-footer__grid-item">
             Nhà phát triển
           </div>
           <div className="login-page-footer__grid-item">
             Quảng cáo
           </div>
           <div className="login-page-footer__grid-item">
             Đóng góp
           </div>
           </div>
           <div className="login-page-footer__grid col col-2">LIÊN KẾT HỮU ÍCH
           <div className="login-page-footer__grid-item">
             Hổ trợ
           </div>       <div className="login-page-footer__grid-item">
             Trình phát Web
           </div>       
           </div>
           <div className="login-page-footer__grid col col-2"></div>
           <div className="login-page-footer__grid col col-2">
           <div className="login-page-footer__grid-social">

             <div className="login-page-footer__grid-social-item">
               <a href=""><InstagramIcon style={{ fontSize:28}}></InstagramIcon></a></div>
             <div className="login-page-footer__grid-social-item">
               <a href=""><FacebookIcon style={{ fontSize:28}}></FacebookIcon></a></div>
             <div className="login-page-footer__grid-social-item">
               <a href=""><GitHubIcon style={{ fontSize:28}}></GitHubIcon></a></div>
           </div>
           </div>


         </div>
         <div className="login-page-footer__copy-right">
           Power By T&d
         </div>
     </div>
    </div>
  )
}
// 