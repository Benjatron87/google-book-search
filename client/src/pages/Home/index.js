import React from 'react';
import "./style.css"
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";
import Card from "../../components/Card";

class Home extends React.Component {

    state = {
        search: "",
        books: []
    }

    searchBooks = query => {
        API.search(query)
            .then(res => {
               
               if(res.data.items){ 
                this.setState({books: res.data.items})
               }
               else{
                   alert("Not a Valid Search!");
               }
            })
            .catch(err => console.log(err))
    }

    handleInputChange = (event) => {

        this.setState({
          search: event.target.value
        });
    };

    exists = (item) => {
        if(item){
            return item;
        }
        else{
            return "";
        }
    }

    submitSearch = (event) => {
        event.preventDefault();

        this.searchBooks(this.state.search);
    }

    render(){
        return (
            
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <form>
                        <div className="form-group">
                            <label>Search for a Book!</label>
                            <input onChange={this.handleInputChange} type="text" className="form-control"  placeholder="Search"/>
                        </div>
                    </form><button className="btn search" onClick={this.submitSearch}>Search</button>
                </div>

                <Wrapper results={"Results:"}>
                    {this.state.books.map(book => (
                        <Card
                            title={this.exists(book.volumeInfo.title)}
                            author={this.exists(book.volumeInfo.authors)}
                            id={this.exists(book.id)}
                            image={this.exists(book.volumeInfo.imageLinks)}
                            synopsis={this.exists(book.volumeInfo.description)}
                            link={this.exists(book.volumeInfo.previewLink)}
                            button={"Save"}
                            >
                        </Card>
                    ))}
                </Wrapper>
            </div>
        );
    }

}

export default Home;