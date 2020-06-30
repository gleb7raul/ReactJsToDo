import React from 'react';
import {
    Button
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './BookShortTemplate.css';


const BookShortTemplate = ({ func, createNewBook, rating }) => (
    <div className="templateContainer">
        <div className="additionaltemplateContainer">
            <section className="templateWrapper">
                <label className="lablel" ><input type="checkbox" onChange={(e) => createNewBook({ important: e.target.checked })} /> important</label>
                <input className="title" type="text" placeholder="title..." onChange={(e) => createNewBook({ title: e.target.value })} />
                <select className="dropDownBookShortTemplate" name="select" onChange={(e) => createNewBook({ rating: e.target.value })}>
                    {rating.map(function (sRating, index) {
                        return (<option value={sRating} key={index}>{sRating}</option>);
                    })}
                </select>
                <textarea className="textareaBookShortTemplate" placeholder="text..." onChange={(e) => createNewBook({ comment: e.target.value })} />
            </section >
            <Button onClick={() => func(false)} variant="primary" className="templateAddButton">
                ADD
            </Button>
            <Button onClick={() => func(false)} variant="primary" className="templateAddButton">
                CANCEL
            </Button>
        </div >
    </div >

);


export default BookShortTemplate;
