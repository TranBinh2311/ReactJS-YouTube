import React from 'react'
import './Navbar.scss'

const Navbar = ( {show} ) => {
    return (
        <div className= { show ? "navbar-container  active" : "navbar-container"}>
            <ul>
                <li>
                    <a href= "/" >
                         <i className="fas fa-home"></i> 
                         <span>Trang chủ</span> 
                    </a>
                </li>

                <li>
                    <a href= "/" >
                         <i className="fas fa-compass"></i>
                         <span>Khám phá</span> 
                    </a>
                </li>

                <li>
                    <a href= "/" >
                         <i className="fab fa-youtube"></i>
                         <span>Kêng đăng ký</span> 
                    </a>
                </li>
                
            </ul>

            <hr></hr>
            <ul>
                <li>
                    <a href= "/" >
                        <i class="fas fa-photo-video"></i>
                         <span>Thư viện</span> 
                    </a>
                </li>

                <li>
                    <a href= "/" >
                        <i className="fas fa-history"></i>
                         <span>Video đã xem</span> 
                    </a>
                </li>

                <li>
                    <a href= "/" >
                        <i classNames="fas fa-user-check"></i>
                         <span>Video của bạn</span> 
                    </a>
                </li>

                <li>
                    <a href= "/" >
                        <i className="far fa-clock"></i>
                         <span>Video đã thích</span> 
                    </a>
                </li>
                
            </ul>
            
        </div>
    )
}

export default Navbar
