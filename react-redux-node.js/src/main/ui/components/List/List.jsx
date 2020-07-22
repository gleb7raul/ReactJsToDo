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
        this.Rating = ['none', 'poor', 'middle', 'great'];
        this.state = {
            ratingSearch: '',
            list: [],
            show: false,
            bookShortTemplate: {
                inputTitleText: '',
                status: '',
                rating: '',
                comment: '',
                showData: {
                    status: '',
                    title: '',
                    rating: '',
                    comment: ''
                }
            }
        };
        this._defaultStateOfBookShortTemplate = {
            inputTitleText: '',
            status: '',
            rating: '',
            comment: '',
            showData: {
                status: '',
                title: '',
                rating: '',
                comment: ''
            }
        };
    }

    openTemplate = () => {
        this.setState({ show: true });
    }

    cancel = (e) => {
        e.preventDefault();
        this.setState({ show: !this.state.show });
        this.setState({ bookShortTemplate: this._defaultStateOfBookShortTemplate });
    }

    addBook = (e) => {
        e.preventDefault();
        this.setState({ list: this.state.list.concat(this._bookCreated()) });
        this.setState({ show: !this.state.show });
        this.setState({ bookShortTemplate: this._defaultStateOfBookShortTemplate });

    }

    _bookCreated = () => {
        let book = {};
        book = { ...this.state.bookShortTemplate.showData };
        book.id = new Date().toString();
        book.done = false;
        book.show = true;
        return book;
    }

    createBook = (propertyOfBook) => {
        if (propertyOfBook.title) {
            const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
            bookShortTemplateCopy.inputTitleText = propertyOfBook.title;
            bookShortTemplateCopy.showData.title = propertyOfBook.title;
            this.setState({ bookShortTemplate: bookShortTemplateCopy });
        }
        if (Object.keys(propertyOfBook).some((property) => property === 'important')) {
            const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
            bookShortTemplateCopy.status = propertyOfBook.important;
            bookShortTemplateCopy.showData.status = propertyOfBook.important;
            this.setState({ bookShortTemplate: bookShortTemplateCopy });
        }
        if (propertyOfBook.rating) {
            const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
            bookShortTemplateCopy.rating = propertyOfBook.rating;
            bookShortTemplateCopy.showData.rating = propertyOfBook.rating;
            this.setState({ bookShortTemplate: bookShortTemplateCopy });
        }
        if (propertyOfBook.comment) {
            const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
            bookShortTemplateCopy.comment = propertyOfBook.comment;
            bookShortTemplateCopy.showData.comment = propertyOfBook.comment;
            this.setState({ bookShortTemplate: bookShortTemplateCopy })
        }
    }

    complitedOfBook = (oStatus) => {
        console.log(oStatus);
        const aCurrentListOfBooks = this.state.list.map((oBook) => {
            if (oBook.id === oStatus.id) {
                oBook.done = oStatus.status;
            }
            return oBook;
        });
        this.setState({ list: aCurrentListOfBooks });
    }

    deleteBook = (e, id) => {
        e.preventDefault();
        const aCurrentListOfBook = [...this.state.list];
        const iIndexOfSelectedBook = aCurrentListOfBook.findIndex((oBook) => oBook.id === id);
        aCurrentListOfBook.splice(iIndexOfSelectedBook, 1);
        this.setState({ list: aCurrentListOfBook });
    }

    copyBook = (e, id) => {
        e.preventDefault();
        const aCurrentListOfBook = [...this.state.list];
        aCurrentListOfBook.forEach((oBook) => {
            if (oBook.id === id) {
                const oNewBook = { ...oBook };
                oNewBook.id = new Date().toString();
                aCurrentListOfBook.push(oNewBook);
            };
        });
        this.setState({ list: aCurrentListOfBook });
    }

    searchFilter = (e) => {
        const sValue = e.target.value;
        const aList = [...this.state.list];
        aList.forEach((oBook) => {
            if (!this._validated(sValue, oBook)) {
                oBook.show = false;
            } else {
                oBook.show = true;
            };
        });
        this.setState({ list: aList });
    }

    _validated = (sValue, oBook) => {
        let bShowBook = false;
        const sValueLength = sValue.length;
        const aAllFields = [];
        const aComment = oBook.comment.split(' ');
        aAllFields.push(oBook.status);
        aAllFields.push(oBook.title);
        const aResult = aAllFields.concat(aComment);
        aResult.forEach((sElement) => {
            if (sElement.substr(0, sValueLength) === sValue) {
                bShowBook = true;
            };
        });
        return bShowBook;
    }

    handlerSelectedRating = (eventKey) => {
        this.setState({ ratingSearch: eventKey });
    }

    render() {
        const { show,
            list,
            bookShortTemplate,
            ratingSearch
        } = this.state;

        return (
            <div className="wrapper">
                <section className="toollbar">
                    <input className="searchField" type="text" placeholder="Search..." onChange={this.searchFilter} />
                    <DropdownButton id="dropdown-item-button" title="Sorting Rating" onSelect={this.handlerSelectedRating}>
                        <Dropdown.Item eventKey="" as="button">none</Dropdown.Item>
                        <Dropdown.Item eventKey="poor" as="button">Poor</Dropdown.Item>
                        <Dropdown.Item eventKey="middle" as="button">Middle</Dropdown.Item>
                        <Dropdown.Item eventKey="great" as="button">Great</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick={this.openTemplate} variant="primary">
                        Create new book
                    </Button>
                </section>
                <section className={show ? 'displayTemplate' : 'createNewBook'}>
                    <BookShortTemplate bookShortTemplate={bookShortTemplate} createNewBook={this.createBook} rating={this.Rating} addBook={this.addBook} cancel={this.cancel} />
                </section>
                <section>
                    <Book list={list} complitedOfBook={this.complitedOfBook} deleteBook={this.deleteBook} copyBook={this.copyBook} ratingSearch={ratingSearch} />
                </section>
            </div>
        );
    }

}

export default List;
