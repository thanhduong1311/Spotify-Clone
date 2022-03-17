import React from 'react'
import "./assets/download.css"
import HeaderLoginPage from '../MainLayout/HeaderLoginPage'
import FooterLoginPage from '../MainLayout/FooterLoginPage'

export default function Download() {
  return (
    <>
    <HeaderLoginPage/>

    <div className="download-page-header">
      <div className="download-page-header__img">
     
      <img src="https://www-growth.scdn.co/static/download/laptop.svg"  className='computer-img' />
      <img src="https://www-growth.scdn.co/static/download/green-circle.svg"  className='crile-img' />
      <img src="https://www-growth.scdn.co/static/download/green-success-check.svg"  className='stick-img' />
   
      </div>
      <div className="download-page-header__title">
      Tải xuống T & D
      </div>
      <div className="download-page-header__description">
      Phát hàng triệu bài hát và podcast trên thiết bị của bạn.
      </div>
      <div className="download-page-header__download-btn">
      Tải xuống
      </div>
      </div>
    <div className="download-page-body">
    <div className="download-page-body__title">
    Phủ sóng âm nhạc trên cả thiết bị di động và máy tính bảng.
      </div>
      <div className="download-page-body__description">
      Nghe nhạc trên điện thoại hay máy tính bảng hoàn toàn miễn phí, dễ dàng và thú vị.
      </div>
      <div className="download-page-body__download-option">
        <div className="download-with-google-play">
          <img src="https://www.seekpng.com/png/detail/16-161497_1-google-play-logo-logo-de-play-store.png" alt="" />
          <a href="#">Tải xuống với Google Play</a>
          </div>
        <div className="download-with-app-store">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/640px-App_Store_%28iOS%29.svg.png" alt="" />
         <a href="#">Tải xuống với App Store</a>
          </div>
        <div className="download-with-microsoft-store">
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADgCAMAAADCMfHtAAAAflBMVEXo6Oj///8ApO//uQB/ugDyUCLq6ur7+/vn7u/t6vAAou/n6u7s6u7w6+jn6vChyGL/tQBiue0wq+79vTD4yGLvhW7ySxfxYj+KvjDwgGiex10Anu95wOz2zHny8vLv7+/yRgntoZHvi3alym210Yn5xVWbzOuExOz1z4Ty1ZtA6/YkAAAEXklEQVR4nO2c6XbcIAxG7aaBpEm6N23TFrov7/+Czcx4ABs8I2HJzjjf/UmNo4sECjk+bdqZsNY5780G752zdq4f3MzxQ6zzTY53s1jqG1pnCno7zAyS2oYH9DpJbUddQ3dEr0ukagyahiQ/9TzqGdpj9TmTo5ohOYEdaqWqZMhKYJdGnUiUDG1BwMcuf98fSyugU6kqhlmFlo5Lm/8WoFKpGobD0EcDz5qlhqKCYV/wcLcb7lcFRXlDzwt54OjF4xE3dOx4HW9JuEgbuuPRbq5RZn+N2p6fRlNR2DBtE8XfU/J71OZ+0VsX4aYhbJhko9DBCw1il0uXKsaJIq6yhv6Q4KBLmt4NOE1+2L1OomJFDd0BwX7vy6++qWL4N4mLlajhuGC/J/jiDk0eiG+crihpmNToQIHUQpKHXBybrChoaEcF0wPmwE0wyXMyNlVR0DB6DLKUVujBeAt5dpMbpJxhTOFgE6YJpL4i2YlTG6ScYUxhPyLCDiy8I9mJzbQY5QxHPKgVOnw6HZp0/RczjCdhL4WGJZi8JTztiVPHEDMMKr0Uep5gksSQN5sXPgspw3hI2OIoNQ0xiTHEaXUqZeiytd8Qa5R8sy2X6YQ6lTI0WWBtmhB6DvJqt/2UcpEyzIsrHWTso5EyrU+ikGHYcGmyCgcjJaJsVcykJAoZupJL3IWcV+X17iclUcjQZwufHqSs4MJi+f5I7XEqZBgWPhkL1rzY8oK33L3cQ8iwJFNxzPTn7QfsIKfM19VNG4sqMSwcirx3NcORytDqpg0IlZWscyhS7hGRV3xdLewnV80aYgs2tUVaOLVM3VJ1cVTNGlIwLHZIEqOGdaepmmGxQ5JwY4Z1saoZljokjXHDqo2oZhi2Iftl44ZVG1HdkL95TsSw1D+IjBtW9Xx1Q/66jxtWHaZahvVH6QHDqmDVDfnnHwyZwJAGDFnAkMkjMLQSxL8eZSOO/TKfTQ2GNbE1AAAAAAAAAAAAAAAAAAAAAAAAwCPigkE35fqSzPWiblsu3t2eE7l9v1O8/vCUzN3yisqGLy4X9mMZnsMQhssAQxjCEIb6wBCGMIShPjCEIQxhqA8MYQhDGOoDQxjCEIb6wBCGMIShPjCEIQxhqA8M12D49ZbKiRp++0jme2f4447Mz+W/+lr/l3sAADAD5obM/n8lu2KwqNuWm1efyDy52U65OntJ5tfzhf02hs+eUHndGb45I/MWhvrAEIYwhKE+MIQhDGGoDwxhCEMY6gNDGMIQhvrAEIYwhKE+MIQhDGGoDwxhCEMY6gNDGMLwQRiSCYb0b6IeguHvz2T+7D5su/r7hcy/h/BhG4Nuyml9uQcAAAAAAAAAAAAAZDDHHzlpTOOXDkEZ37ilQ1DGNXbpEJSxTbvujWjapl13mbp7w3bpIFRpN4Zr3ol2a9iut2H4dme42sPGtHvDlSpuBTvDVRaqb1PDFR43tu0btq1bU6kaF7yi4X0enTdrwDubWP0HElUO3Unz+V8AAAAASUVORK5CYII=" alt="" />
         <a href="#">Tải xuống với Microsoft Store</a>
          </div>
        </div>

          </div>
        <div className="download-page-footer">
          <img className='download-page-footer__img' src="https://www-growth.scdn.co/static/download/all-devices.svg" alt="" />
         <div className="download-page-footer__title">
           Một tài khoản, Nghe mọi nơi
           </div>
           <ul className="download-page-footer__option">
             <li>Di Động</li>
             <li>Máy Tính</li>
             <li>Máy tính bảng</li>
             <li>Ô tô</li>
             <li>Playstation</li>
             <li>XBox</li>
             <li>TV</li>
             <li>Loa</li>
             <li>Trình Phát trên Web</li>
           </ul>
     
      </div>


    <FooterLoginPage/>
    </>
  )
}
