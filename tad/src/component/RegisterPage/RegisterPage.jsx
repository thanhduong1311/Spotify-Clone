import React from 'react'
import "./assets/registerpage.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
import { Avatar , TextField , FormControlLabel } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import { Route , Routes, BrowserRouter} from 'react-router-dom';
import RegisterWithFacebook from '../RegisterWithFacebook/RegisterWithFacebook';


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
                 <a href='/registerpage/RF'> Đăng ký với faceBook </a>
            </button>
          
            <button className="RegisterPage-body__btn RegisterPage-body__btn--google">
            <Avatar sx={{width: 20,height : 20}} src={logogg} />
                 <a href='/registerpage/RG'> Đăng ký với google </a>
            </button>

        
            <div className="RegisterPage-body__message">
                 <span className='line'></span> 
                 Hoặc 
                 <span className='line'></span>
                </div>

          
         
            <button className="RegisterPage-body__btn RegisterPage-body__btn-register">
                 <span> Đăng kí</span>
            </button>
        </div>
     </div>
  )
}
