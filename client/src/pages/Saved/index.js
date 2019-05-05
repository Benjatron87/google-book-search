import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import "./style.css"


class Saved extends Component {

    state = {
        book: []
    }

    render() {
        return (
            <div className="container">
                <Wrapper results={"Saved:"}>
                   
                </Wrapper>
            </div>
        )
    }

}

export default Saved;