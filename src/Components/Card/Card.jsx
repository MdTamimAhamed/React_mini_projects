import React from "react";
import './card.css'

function Card(){
    return(
        <>
            <div className="container">
                <div className="card-wrapper">
                    <div className="card">
                        <img src=""/>
                        <div className="card-content">
                            <p className="movie-time">11:30</p>
                            <button className="watch-btn">Watch Now</button>
                            <h2 className="movie-title">Shangchi</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;