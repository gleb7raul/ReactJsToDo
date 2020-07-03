import React from 'react';
import './Book.css';

const Book = ({
    list
}) => (
        <div>
            <ul className="singleBookHeader">
                {list.map(function (oList, index) {
                    return (<li key={new Date().toString()} className="singleBook">
                        <section className="singleBookSection">
                            <div>
                                <p className="lablelBook" > Done</p>
                                <input type="checkbox" />
                            </div>
                            <div>
                                <p className="lablelBook"> Status</p>
                                <lable className="valueOfBook">{oList.important ? 'Important' : 'Normally'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Title</p>
                                <lable className="valueOfBook">{oList.title ? oList.title : 'none'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Rating</p>
                                <lable className="valueOfBook">{oList.rating ? oList.rating : 'none'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Comment</p>
                                <lable className="valueOfBook">{oList.comment ? oList.comment : 'none'}</lable>
                            </div>
                        </section>
                        <div className="dropDownMenu">
                            <div className="dropDownMenuWrapper">
                                <p>{'>>>'}</p>
                                <div className="dropDownMenu2">Hi</div>
                            </div>
                        </div>
                    </li>);
                })}
            </ul>
        </div>
    );

export default Book;