import React from 'react'
import "./Body.scss"
const Body = ({videos}) => {
    return (
        videos.map(item  => {
            return (
                <div className = "body-container">
                    <div className = "body-search" key = {item.id}>
                        <div className = "body-search__video">
                                <iframe width="320" 
                                height="196"
                                src= {`https://www.youtube.com/embed/${item.id}`} 
                                title="YouTube video player" frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                                </iframe>
                        </div>

                        <div className = "body-search__content">
                            <div className ="body-search__content-header"> 
                                {item.title}
                            </div>
                            <div className ="body-search__content-title"> 
                                <span>96 N lượt xem</span>
                                <span>10h trước</span>
                            </div>
                            <div className ="body-search__content-author"> 
                                <div></div>
                                <span>{item.author}</span>
                            </div>
                            <div className ="body-search__content-description"> 
                                {item.description}
                            </div>
                            <div className ="body-search__content-logo">
                                Mới
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        
    )
}

export default Body
