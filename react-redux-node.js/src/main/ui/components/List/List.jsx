import React from 'react';
import {
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';
import BookShortTemplate from './../BookShortTemplate';

class List extends React.Component {
    constructor() {
        super();
        this.Rating = ['poor', 'middle', 'great'];
        this.newBook = {};
        this.state = {
            list: [],
            show: false
        };
    }

    addBook(event) {
        event.preventDefault();
        if (event.target.tagName === 'BUTTON') {
            this.setState({ show: true });
            this.newBook = {};
        } else {
            if (Object.keys(this.newBook)) {
                this.setState({ list: this.state.list.push(this.newBook) });
            }
            this.setState({ show: !this.state.show });

        }
        console.log(this.state);
    }

    createBook(propertyOfBook) {
        if (propertyOfBook.title) {
            this.newBook.title = propertyOfBook.title;
        }
        if (Object.keys(propertyOfBook).some((property) => property === 'important')) {
            this.newBook.important = propertyOfBook.important;
        }
        if (propertyOfBook.rating) {
            this.newBook.rating = propertyOfBook.rating;
        }
        if (propertyOfBook.comment) {
            this.newBook.comment = propertyOfBook.comment;
        }
    }

    render() {
        const { show, list } = this.state;
        return (
            <div className="wrapper">
                <section className="toollbar">
                    <input className="searchField" type="text" placeholder="Search..." />
                    <DropdownButton id="dropdown-item-button" title="Sorting Selection">
                        <Dropdown.Item eventKey="1" as="button">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2" as="button">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick={this.addBook.bind(this)} variant="primary">
                        Create new book
                    </Button>
                </section>
                <section className={show ? 'displayTemplate' : 'createNewBook'}>
                    <BookShortTemplate createNewBook={this.createBook.bind(this)} rating={this.Rating} addBook={this.addBook.bind(this)} />
                    <ul>
                        {console.log(list)}
                    </ul>
                </section>
            </div>
        );
    }

}

export default List;
