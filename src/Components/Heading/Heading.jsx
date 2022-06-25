import React from "react";
import '../../Components/Heading/heading.css';

const Heading = (props) => {
    return (
        <>
            <div className='clock-header'>
                <div className='container'>
                    <h1 className='list-title'>{props.sectionTitle}</h1>
                </div>
            </div>
        </>
    );
};

export default Heading;