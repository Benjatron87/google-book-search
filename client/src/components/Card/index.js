import React from 'react';
import './style.css'

function Card (props) {

    const num = 400;
    let synopsis = props.synopsis || "";

    if(synopsis.length > num){
        synopsis = synopsis.slice(0,num) + "...";
    }
    
    return (
        <div className="container">
            <div className="book">
                    <p className="header">{props.title}<button className="buttons">{props.button}</button><button className="buttons">View</button></p>
                    <p className="author">Written by: {props.author}</p>
                    <div>
                    <img alt="None" src={props.image} className="img"/>
                    </div>
                    <p className="synopsis">{synopsis}</p>
            </div>
        </div>
    );
}

export default Card;