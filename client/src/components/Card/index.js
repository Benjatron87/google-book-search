import React from 'react';
import './style.css'

function Card (props) {


        return (
            <div className="container">
                <div className="row book">
                        {props.title}
                    <div className="col-10">

                    </div>
                </div>
            </div>
        );

}

export default Card;