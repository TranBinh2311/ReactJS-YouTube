import React from 'react'
import "./Body.scss"
const Body = () => {
    return (
        <div className = "body-container">
            <div className = "body-search">
                <div className = "body-search__video">
                        <iframe width="320" 
                        height="196"
                         src="https://www.youtube.com/embed/2C09y1YW2uE" 
                         title="YouTube video player" frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
                         </iframe>
                </div>

                <div className = "body-search__content">
                    <div className ="body-search__content-header"> NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY 
                    - EDM Tik Tok ORINN REMIX, Lk Nhạc Trẻ 2021 Gây Nghiện Cực Hot 
                    </div>
                    <div className ="body-search__content-title"> 
                        <span>96 N lượt xem</span>
                        <span>10h trước</span>
                    </div>
                    <div className ="body-search__content-author"> 
                        <div></div>
                        <span>Orin Remix</span>
                    </div>
                    <div className ="body-search__content-description"> 
                        NHẠC TRẺ REMIX 2021 HAY NHẤT HIỆN NAY - EDM Tik Tok ORINN REMIX, Lk Nhạc Trẻ 2021 Gây Nghiện Cực Hot
                    </div>
                    <div className ="body-search__content-logo">
                        Mới
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
