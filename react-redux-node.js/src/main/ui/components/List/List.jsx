import React, { PureComponent } from 'react';
import {
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';
import BookShortTemplate from './../BookShortTemplate';
import Book from './../Book';

class List extends PureComponent {
    constructor() {
        super();
        this.Rating = ['poor', 'middle', 'great'];
        this.newBook = {};
        this.test = [];
        this.state = {
            list: [],
            show: false
        };
    }

    openTemplate = () => {
        this.setState({ show: true });
        this.newBook = {};
    }

    addBook = (event) => {
        event.preventDefault();
        if (event.target.tagName === 'BUTTON') {
            this.setState({ show: true });
            this.newBook = {};
        } else {
            if (Object.keys(this.newBook)) {
                let book = Object.assign(this.newBook, { id: new Date().toString() });
                this.setState({ list: this.state.list.concat(book) });
            }
            this.setState({ show: !this.state.show });
        }
    }

    createBook = (propertyOfBook) => {
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
                    <Button onClick={this.openTemplate} variant="primary">
                        Create new book
                    </Button>
                </section>
                <section className={show ? 'displayTemplate' : 'createNewBook'}>
                    <BookShortTemplate createNewBook={this.createBook} rating={this.Rating} addBook={this.addBook} />
                </section>
                <section className={list ? 'displayTemplate' : 'createNewBook'}>
                    <Book list={list} />
                </section>
            </div>
        );
    }

}

export default List;
