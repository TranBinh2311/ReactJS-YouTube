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
import Body from './Body'
import axios from 'axios'
const Header_Youtube = () => {
    const [showNav, setShowNav] = useState(false);
    const [video, setVideo] = useState([])
    const [query, setQuery] = useState('');
    const handleSearchYouTube = async () => {
        let  res = await axios({
            "method": "GET",
            "url": 'https://www.googleapis.com/youtube/v3/search',
            "params":{
                'part':'snippet',
                'maxResults':'20',
                'key':'AIzaSyDf_qNeSu_qP-yZo7YN1mM2lQ3clgvCf1s',
                'type': 'video',
                'q': query
                
            }
        })
        if(res.data && res.data.items){
            let raw = res.data.items;
            let result = [];
            if(raw && raw.length > 0){
                
                raw.map(item =>{
                    let obj = {};
                    obj.id = item.id.videoId;
                    obj.title = item.snippet.title;
                    obj.author = item.snippet.channelTitle;
                    obj.description  = item.snippet.description;

                    result.push(obj);
                })
            }
            //console.log(result);
            setVideo(result);
        }
    }
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
                                <input placeholder = "Tìm kiếm"
                                value= {query}
                                onChange = {event => {setQuery(event.target.value)}}
                                ></input>
                            </div>
                            
                            <div className= "header-container__search-cover--icon" onClick = {()=>handleSearchYouTube()}>
                                <i className="fas fa-search white-color"></i>
                            </div>  
                        </div>
                        <div className= "header-container__search-voice">
                            <i className="fas fa-microphone white-color"></i>
                        </div>
                    </div>
                    
                </div>

                <div className = "header-container__icon">
                    <div className = "header-container__icon-cover">
                        <div className = "header-container__icon-child">
                            <i className="fas fa-camera"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i className="fas fa-th"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i className="far fa-bell"></i>
                        </div>

                        <div className = "header-container__icon-child">
                            <i className="fas fa-images"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar show = {showNav} />  
            <Body videos = {video}/> 
        </>
    )
}

export default Header_Youtube
