import React from 'react';
import './Book.css';

const Book = ({
    list,
    complitedOfBook,
    deleteBook,
    copyBook,
    ratingSearch
}) => (
        <div className={list.map((oList) => oList.show ? 'singleBookInShow' : 'singleBookInWork')}>
            {console.log(list)}
            <ul className="singleBookHeader">
                {list.map((oList, index) => {
                    if (oList.show && (ratingSearch ? oList.rating === ratingSearch : true)) {
                        return (<li key={index} className="singleBook">
                            <div className={oList.done ? 'singleBookComplited' : 'singleBookInWork'}></div>
                            <section className="singleBookSection">
                                <div>
                                    <p className="lablelBook" > Done</p>
                                    <input type="checkbox" checked={oList.done} onChange={(e) => complitedOfBook({ status: e.target.checked, id: oList.id })} />
                                </div>
                                <div>
                                    <p className="lablelBook"> Status</p>
                                    <label className="valueOfBook" htmlFor="text">{oList.status ? 'Important' : 'Normally'}</label>
                                </div>
                                <div>
                                    <p className="lablelBook"> Title</p>
                                    <label className="valueOfBook" htmlFor="text">{oList.title ? oList.title : 'none'}</label>
                                </div>
                                <div>
                                    <p className="lablelBook"> Rating</p>
                                    <label className="valueOfBook" htmlFor="text">{oList.rating ? oList.rating : 'none'}</label>
                                </div>
                                <div>
                                    <p className="lablelBook"> Comment</p>
                                    <label className="valueOfBook" htmlFor="text">{oList.comment ? oList.comment : 'none'}</label>
                                </div>
                            </section>
                            <div className="dropDownMenu">
                                <button className="dropDownMenuCopyWrapper" onClick={(e) => copyBook(e, oList.id)}>Copy</button>
                                <button className="dropDownMenuDelete" onClick={(e) => deleteBook(e, oList.id)}>Delete</button>
                                <button className="dropDownMenuEdit">Edit</button>
                                <button className="dropDownMenuDisplay">Display</button>
                                <div>{'<<<'}</div>
                            </div>
                        </li>);
                    } else return true;
                })}
            </ul>
        </div>
    );

export default Book;
