import React from 'react';
import './Book.css';

const Book = ({
    list,
    complitedOfBook
}) => (
        <div>
            <ul className="singleBookHeader">
                {list.map(function (oList) {
                    return (<li key={new Date().toString()} className="singleBook">
                        <div className={oList.done ? 'singleBookComplited' : 'singleBookInWork'}></div>
                        <section className="singleBookSection">
                            <div>
                                <p className="lablelBook" > Done</p>
                                <input type="checkbox" checked={oList.done} onChange={(e) => complitedOfBook({ status: e.target.checked, id: oList.id })} />
                            </div>
                            <div>
                                <p className="lablelBook"> Status</p>
                                <lable className="valueOfBook" htmlFor="text">{oList.status ? 'Important' : 'Normally'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Title</p>
                                <lable className="valueOfBook" htmlFor="text">{oList.title ? oList.title : 'none'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Rating</p>
                                <lable className="valueOfBook" htmlFor="text">{oList.rating ? oList.rating : 'none'}</lable>
                            </div>
                            <div>
                                <p className="lablelBook"> Comment</p>
                                <lable className="valueOfBook" htmlFor="text">{oList.comment ? oList.comment : 'none'}</lable>
                            </div>
                        </section>
                        <div className="dropDownMenu">
                            <button className="dropDownMenuCopyWrapper">Copy</button>
                            <button className="dropDownMenuDelete">Delete</button>
                            <button className="dropDownMenuEdit">Edit</button>
                            <button className="dropDownMenuDisplay">Display</button>
                            <div>{'<<<'}</div>
                        </div>
                    </li>);
                })}
            </ul>
        </div>
    );

export default Book;
