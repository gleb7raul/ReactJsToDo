import React from 'react';
import {
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookShortTemplate.css';


const BookShortTemplate = ({ func, createNewBook }) => (
    <div className="templateContainer">
        <div className="additionaltemplateContainer">
            <section className="templateWrapper">
                <label className="lablel" ><input type="checkbox" onChange={(e) => createNewBook({ important: e.target.spellcheck })} /> important</label>
                <input className="title" type="text" placeholder="title..." onChange={(e) => createNewBook({ title: e.target.value })} />
                <DropdownButton id="dropdown-item-button" title="Rating" onClick={(e) => createNewBook({ rating: e.target.innerText })}>
                    <Dropdown.Item as="button">poor</Dropdown.Item>
                    <Dropdown.Item as="button">normally</Dropdown.Item>
                    <Dropdown.Item as="button">great</Dropdown.Item>
                </DropdownButton>
                <textarea placeholder="text..." onChange={(e) => createNewBook({ comment: e.target.value })} />
            </section >
            <Button onClick={() => func(false)} variant="primary" className="templateAddButton">
                ADD
            </Button>
            <Button onClick={() => func(false)} variant="info" className="templateAddButton">
                CANCEL
            </Button>
        </div >
    </div >

);


export default BookShortTemplate;
