import React from "react";
import './card.css'


function Card(props){
    return(
        <>
            <div className="card">
                <img 
                    src={props.imgSrc} 
                    alt="wallpaper" 
                    height='400px' 
                    width='300px'
                    className="card-image"
                />
                <div className="card-content">
                    <p className="movie-time">{props.mov_time}</p>
                    <button className="watch-btn">Watch Now</button>
                    <h2 className="movie-title">{props.imgTitle}</h2>
                </div>
            </div>
        </>
    );
}

export default Card;