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
    constructor(props) {
        super(props);
        this.Rating = ['poor', 'middle', 'great'];
        this.state = {
            list: [],
            show: false,
            bookShortTemplate: {
                inputTitleText: '',
                done: '',
                rating: '',
                textArea: '',
                showData: {
                    done: '',
                    title: '',
                    rating: '',
                    textArea: ''
                }
            }
        };
    }

    openTemplate = () => {
        //this.newBook = {};
        this.setState({ show: true });
    }

    addBook = () => {
        // const defaultStateOfBookShortTemplate = {
        //     inputTitleText: '',
        //     done: '',
        //     rating: '',
        //     textArea: '',
        //     showData: {
        //         done: '',
        //         title: '',
        //         rating: '',
        //         textArea: ''
        //     }
        // };
        const book = { ...this.state.bookShortTemplate.showData };
        book.id = new Date().toString();
        this.setState({ list: this.state.list.concat(book) });
        this.setState({ show: !this.state.show });
        //this.setState({ bookShortTemplate: defaultStateOfBookShortTemplate });

    }

    createBook = (propertyOfBook) => {
        if (propertyOfBook.title) {
            const bookShortTemplate = { ...this.state.bookShortTemplate };
            bookShortTemplate.inputTitleText = propertyOfBook.title;
            bookShortTemplate.showData.title = propertyOfBook.title;
            this.setState({ bookShortTemplate });
        }
        if (Object.keys(propertyOfBook).some((property) => property === 'important')) {
            //this.newBook.important = propertyOfBook.important;
        }
        if (propertyOfBook.rating) {
            // this.newBook.rating = propertyOfBook.rating;
        }
        if (propertyOfBook.comment) {
            //this.newBook.comment = propertyOfBook.comment;
        }
    }

    render() {
        const { show, list, bookShortTemplate } = this.state;
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
                    <BookShortTemplate bookShortTemplate={bookShortTemplate} createNewBook={this.createBook} rating={this.Rating} addBook={this.addBook} />
                </section>
                <section className='displayTemplate'>
                    {console.log(list)}
                    <Book list={list} />
                </section>
            </div>
        );
    }

}

export default List;
