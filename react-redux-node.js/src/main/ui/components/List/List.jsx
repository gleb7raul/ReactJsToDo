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
        this.State = {
            list: []
        };
    }

    addBook() {

    }

    render() {
        return (
            <div className="wrapper">
                <section className="toollbar">
                    <input className="searchField" type="text" placeholder="Search..." />
                    <DropdownButton id="dropdown-item-button" title="Sorting Selection">
                        <Dropdown.Item as="button">Action</Dropdown.Item>
                        <Dropdown.Item as="button">Another action</Dropdown.Item>
                        <Dropdown.Item as="button">Something else</Dropdown.Item>
                    </DropdownButton>
                    <Button onClick="addBook" variant="primary">
                        Create new book
                    </Button>
                </section>
                <section>
                    <BookShortTemplate />
                </section>
            </div>
        );
    }

}

export default List;
