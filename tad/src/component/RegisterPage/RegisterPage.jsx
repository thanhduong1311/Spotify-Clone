import React from 'react'
import "./assets/registerpage.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar , TextField , Button, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';

const logogg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5AvPJ_t72_pkXu7lGnKo0Qva4z9UHpTVYQ&usqp=CAU" 
const logoph = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxZNy6zYaV13uWKvLA7d3olQHroj5ktxuUCw&usqp=CAU"


export default function RegisterPage() {
  return (
   <div className="RegisterPage">
      <div className="RegisterPage-header">
           <div className="RegisterPage-header__logo">
               <img src="../LogoT&D.png" alt="" />
               <span className='brand'>T & D</span>
           </div>
        </div>
        
        <div className="RegisterPage-body">
            <div className="RegisterPage-body__message">Đăng ký để tham gia vào hội</div>
            <button className="RegisterPage-body__btn RegisterPage-body__btn--facebook">
                <FacebookIcon></FacebookIcon>
                 <span> Đăng ký với faceBook </span>
            </button>
            <button className="RegisterPage-body__btn RegisterPage-body__btn--apple">
                <AppleIcon></AppleIcon>
                 <span> Đăng ký với apple </span>
            </button>
            <button className="RegisterPage-body__btn RegisterPage-body__btn--google">
            <Avatar sx={{width: 20,height : 20}} src={logogg} />
                 <span> Đăng ký với google </span>
            </button>
           
            <button className="RegisterPage-body__btn RegisterPage-body__btn--phone-number">
                 <span> Đăng ký với số điện thoại </span>
            </button>
            <div className="RegisterPage-body__message">
                 <span className='line'></span> 
                 Hoặc 
                 <span className='line'></span>
                </div>
                <button className="RegisterPage-body__btn RegisterPage-body__btn--phone-number">
                 <span> Đăng ký T&D account</span>
            </button>
                 
         
            <button className="RegisterPage-body__btn RegisterPage-body__btn--not-account">
                 <span> Đăng kí T & D ngay </span>
            </button>
        </div>
     </div>
  )
}
