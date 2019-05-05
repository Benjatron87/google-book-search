import React from 'react';
import './style.css'
import API from "../../utils/API";

function Card (props) {

    let synopsis = props.synopsis || "";
    let title = props.title || "";
    let image;

    if(props.image.smallThumbnail){
        image = props.image.smallThumbnail;
    }
    else{
        image = ""
    }

    if(title.length > 70){
        title = title.slice(0, 70) + "...";
    }

    if(synopsis.length > 500){
        synopsis = synopsis.slice(0,500) + "...";
    }

    function saveOrDelete() {
        if(props.button === "Save"){
            API.save(props);
        }
        else{
            API.delete(props.id);
        }
    }
    
    return (
        <div className="container">
            <div className="book">
                    <p className="header">{title}<button onClick={() => saveOrDelete()} className="buttons">{props.button}</button><button className="buttons" ><a className="link" href={props.link} target="blank">View</a></button></p>
                    <p className="author">Written by: {props.author}</p>
                    <div>
                    <img alt="None" src={image} className="img"/>
                    </div>
                    <p className="synopsis">{synopsis}</p>
            </div>
        </div>
    );
}

export default Card;