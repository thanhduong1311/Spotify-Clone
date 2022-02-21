import React from 'react'
import "./assets/signin.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar , TextField , Button, FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const logolink = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj5AvPJ_t72_pkXu7lGnKo0Qva4z9UHpTVYQ&usqp=CAU" 

export default function SignIn() {
  return (
    <div className='SignIn'>
        <div className="SignIn-header">
           <div className="SignIn-header__logo">
               <img src="../LogoT&D.png" alt="" />
               <span className='brand'>T & D</span>
           </div>
        </div>
        
        <div className="SignIn-body">
            <div className="SignIn-body__message">Đăng nhập để tận hưởng</div>
            <button className="SignIn-body__btn SignIn-body__btn--facebook">
                <FacebookIcon></FacebookIcon>
                 <span> Tiếp tục với faceBook </span>
            </button>
            <button className="SignIn-body__btn SignIn-body__btn--apple">
                <AppleIcon></AppleIcon>
                 <span> Tiếp tục với apple </span>
            </button>
            <button className="SignIn-body__btn SignIn-body__btn--google">
            <Avatar sx={{width: 20,height : 20}} src={logolink} />
                 <span> Tiếp tục bằng google </span>
            </button>
            <button className="SignIn-body__btn SignIn-body__btn--phone-number">
                 <span> Tiếp tục với số điện thoại </span>
            </button>
            <div className="SignIn-body__message">
                 <span className='line'></span> 
                 Hoặc 
                 <span className='line'></span>
                </div>
              
                <TextField fullWidth="true" color="warning" id="outlined-basic" style={{fontWeight:"bold",
                    margin:"10px"
                }} label="Địa chỉ email hoặc tên người dùng" variant="outlined" />
                <TextField fullWidth="true" color="warning" id="outlined-basic" style={{fontWeight:"bold",
                    margin:"10px"
                }} label="Mật khẩu" variant="outlined" />
              <div className="SignIn-body__message-forgot-password">
                  Quên Mật Khẩu?
              </div>
              <div className="SignIn-body__remember-and-login-btn">
                   <div className="remember-login">
                   <FormControlLabel control={<Checkbox defaultChecked />} label="Ghi nhớ đăng nhập" />

                   </div>
                   <div className="login-btn">
                   <Button variant="contained" style={{backgroundColor : " #fdc04d"}}>
                    Đăng nhập
                  </Button>
                   </div>

              </div>
                   <div className="line-full-width"></div>
            <div className="SignIn-body__message">Bạn chưa có tài khoản?</div>
            <button className="SignIn-body__btn SignIn-body__btn--not-account">
                 <span> Đăng kí T & D ngay </span>
            </button>
        </div>
    </div>
  )
}
