import React from 'react';
import {
    Button,
    DropdownButton,
    Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';

const List = () => (
    <div className="toollbar">
        <input className="searchField" type="text" value="Search..." />
        <DropdownButton id="dropdown-item-button" title="Sorting Selection">
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
        <div>
            <Button onClick="" variant="primary">
                Create new book
            </Button>
        </div>
    </div>
);

export default List;
