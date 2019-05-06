import React from 'react';
import './style.css'
import axios from "axios";

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

    let book = {
                "title": props.title,
                "author": props.author,
                "image": image,
                "synopsis": synopsis,
                "link": props.link
            }

    if(title.length > 70){
        title = title.slice(0, 70) + "...";
    }

    if(synopsis.length > 500){
        synopsis = synopsis.slice(0,500) + "...";
    }

    function saveOrDelete(book) {
        console.log(book)

        axios.post("/api/books", {
            "title": props.title,
            "author": props.author,
            "image": image,
            "synopsis": synopsis,
            "link": props.link
        });

    }
    
    return (
        <div className="container">
            <div className="book">
                    <p className="header">{title}<button onClick={() => saveOrDelete(book)} className="buttons">{props.button}</button><button className="buttons" ><a className="link" href={props.link} target="blank">View</a></button></p>
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