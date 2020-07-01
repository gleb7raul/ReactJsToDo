import React from 'react';
import './BookShortTemplate.css';


const BookShortTemplate = ({ createNewBook, rating, addBook }) => (
    <div className="templateContainer">
        <div className="additionaltemplateContainer">
            <section>
                <form className="templateForm" onSubmit={addBook}>
                    <div className="templateWrapper" >
                        <label className="lablel" ><input type="checkbox" onChange={(e) => createNewBook({ important: e.target.checked })} /> important</label>
                        <input className="title" type="text" placeholder="title..." onChange={(e) => createNewBook({ title: e.target.value })} />
                        <select className="dropDownBookShortTemplate" name="select" onChange={(e) => createNewBook({ rating: e.target.value })}>
                            {rating.map(function (sRating, index) {
                                return (<option value={sRating} key={index}>{sRating}</option>);
                            })}
                        </select>
                        <textarea className="textareaBookShortTemplate" placeholder="text..." onChange={(e) => createNewBook({ comment: e.target.value })} />
                    </div>
                    <input className="templateAdd title" type="submit" value="ADD" />
                    <input className="templateCancel title" type="submit" value="CANCEL" />
                </form>
            </section >
        </div >
    </div >

);


export default BookShortTemplate;
