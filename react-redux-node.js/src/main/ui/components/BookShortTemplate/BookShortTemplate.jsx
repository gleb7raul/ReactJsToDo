import React, { PureComponent } from 'react';
import './BookShortTemplate.css';


class BookShortTemplate extends PureComponent {
    getTitle(e) {
        const { createNewBook } = this.props;
        return createNewBook({ title: e.target.value })
    }

    render() {
        const { createNewBook, rating, addBook } = this.props;
        return (
            <div className="templateContainer">
                <div className="additionaltemplateContainer">
                    <section>
                        <form className="templateForm" onSubmit={addBook}>
                            <div className="templateWrapper" >
                                <label className="lablel" ><input type="checkbox" onChange={(e) => createNewBook({ important: e.target.checked })} /> important</label>
                                <input className="title" type="text" placeholder="title..." onChange={e => this.getTitle(e)} />
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
    }
}

export default BookShortTemplate;
