import React ,{useState} from 'react'
import "./Header_Youtube.scss"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  }
  from "react-router-dom"
import Navbar from './Navbar'

const Header_Youtube = () => {
    const [showNav, setShowNav] = useState(false)
    return (
        <>
            <div className = "header-container">
                <div className = "header-container__logo">
                    <div className = "header-container__logo-icon" onClick = {()=> setShowNav(!showNav)}> 
                        <i class="fas fa-align-justify white-color"></i>
                    </div>
                    <div className = "header-container__logo-img"></div>
                </div>

                <div className = "header-container__search">
                    <div className = "header-container__search-container">
                        <div className= "header-container__search-cover">
                            <div className= "header-container__search-cover--input">
                                <input placeholder = "Tìm kiếm"></input>
                            </div>
                            
                            <div className= "header-container__search-cover--icon">
                                <i class="fas fa-search white-color"></i>
                            </div>  
                        </div>
                        <div className= "header-container__search-voice">
                            <i class="fas fa-microphone white-color"></i>
                        </div>
                    </div>
                    
                </div>

                <div className = "header-container__icon">
                    <div className = "header-container__icon-cover">
                        <div className = "header-container__icon-child">
                            <i class="fas fa-camera"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i class="fas fa-th"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i class="far fa-bell"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i class="fas fa-images"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar show = {showNav} />   
        </>
    )
}

export default Header_Youtube
