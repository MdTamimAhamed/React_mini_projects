import React, {useState} from "react";
import '../Clock/clock.css';

const Clock = () =>{
    let currTime = new Date().toLocaleTimeString();
    const color = "#e74c3c";

    const[current, setTime] = useState(currTime);
    const[bgColor, setBgColor] = useState(color);

    const changeBgColor = () =>{
        let updateColor = "#5f27cd";
        setBgColor(updateColor);
    };

    const updateTime = ()=>{
        currTime = new Date().toLocaleTimeString();
        return setTime(currTime);
    };
    setInterval(updateTime,1000);


    return(
        <>
            <div className="clock-items">
                <button 
                    style={{backgroundColor: bgColor}}
                    className="clock-btn"
                    onClick={changeBgColor}>Change Color</button>
                <h1>{current}</h1>
            </div>
        </>
    );
};

export default Clock;