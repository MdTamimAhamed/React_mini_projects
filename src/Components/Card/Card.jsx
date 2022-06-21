import React from "react";
import './card.css'


function Card(props){
    return(
        <>
            <div className="card">
                <div className="card-img">
                    <img 
                        src={props.imgSrc} 
                        alt="wallpaper" 
                        height='350px' 
                        width='300px'
                    />
                </div>
                <div className="card-content">
                    <p className="movie-availability">{props.availability}!</p>
                    <h2 className="movie-title">Movie: {props.imgTitle}</h2>
                    <a href={props.movLink} target="-blank">
                        <button className="watch-btn">Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;