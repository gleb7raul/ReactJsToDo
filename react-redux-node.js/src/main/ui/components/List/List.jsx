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
        this.state = {
            list: [],
            show: false
        };
    }

    addBook(evt) {
        if (evt) {
            this.setState({ show: evt });
        } else {
            this.setState({ show: !this.state.show });
        }
    }

    render() {
        const { show } = this.state;
        return (
            <div className="wrapper">
                <section className="toollbar">
                    <input className="searchField" type="text" placeholder="Search..." />
                    <DropdownButton id="dropdown-item-button" title="Sorting Selection">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick={this.addBook.bind(this)} variant="primary">
                        Create new book
                    </Button>
                </section>
                <section className={show ? 'displayTemplate' : 'createNewBook'}>
                    <BookShortTemplate func={this.addBook.bind(this)} />
                </section>
            </div>
        );
    }

}

export default List;
