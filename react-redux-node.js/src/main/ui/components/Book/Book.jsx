import React from 'react';
import './Book.css';

const Book = ({
    list
}) => (
        <div>
            <ul>
                {list.map(function (oList, index) {
                    return (<li key={new Date().toString()} className="singleBook">
                        <div>{oList.important ? 'Important' : 'Normally'}</div>
                        <div>{oList.title}</div>
                        <div>{oList.rating}</div>
                        <div>{oList.comment}</div>
                    </li>);
                })}
            </ul>
        </div>
    );

export default Book;
