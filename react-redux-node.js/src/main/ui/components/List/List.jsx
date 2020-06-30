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
        this.state = {
            list: [],
            show: false
        };
    }

    addBook(evt) {
        if (evt) {
            this.setState({ show: evt });
            this.newBook = {};
        } else {
            this.setState({ show: !this.state.show });
        }
    }

    createBook(propertyOfBook) {
        console.log('first');
        console.log(propertyOfBook);
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
        console.log('result');
        console.log(this.newBook);
    }

    clearProperty() {
        return "";
    }

    render() {
        const { show } = this.state;
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
                    <BookShortTemplate func={this.addBook.bind(this)} createNewBook={this.createBook.bind(this)} rating={this.Rating} clearProperty={this.clearProperty.bind(this)} />
                </section>
            </div>
        );
    }

}

export default List;
