import React from 'react';
import {
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookShortTemplate.css';

const BookShortTemplate = () => (
    <div className="templateContainer">
        <div className="additionaltemplateContainer">
            <section className="templateWrapper">
                <label className="lablel" ><input type="checkbox" /> important</label>
                <input className="title" type="text" placeholder="title..." />
                <DropdownButton id="dropdown-item-button" title="Rating">
                    <Dropdown.Item as="button">poor</Dropdown.Item>
                    <Dropdown.Item as="button">normally</Dropdown.Item>
                    <Dropdown.Item as="button">great</Dropdown.Item>
                </DropdownButton>
                <textarea placeholder="text..." />
            </section >
            <Button onClick="addBook" variant="primary" className="templateAddButton">
                ADD
            </Button>
        </div >
    </div >
);


export default BookShortTemplate;
