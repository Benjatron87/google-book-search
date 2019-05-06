import React, { Component } from 'react';
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";
import "./style.css"
import axios from "axios";


class Saved extends Component {

    state = {
        books: []
    }

    renderSaved = () => {
        let books;

        axios.get("/api/books", function(req, res){
            console.log(req.body);

            books = req.body[0];

            if(books){
                this.setState({books});
            }
            else{
                books = []
            }
        });
    }

    render() {
        return (
            <div onClick={this.renderSaved()} className="container">
                <Wrapper results={"Saved:"}>
                   {this.state.books.map(book => (
                       <Card
                       title={book.title}
                       author={book.author}
                       image={book.image}
                       synopsis={book.synopsis}
                       link={book.link}
                       button={"Delete"}
                       >
                   </Card>
                   ))}
                </Wrapper>
            </div>
        )
    }

}

export default Saved;