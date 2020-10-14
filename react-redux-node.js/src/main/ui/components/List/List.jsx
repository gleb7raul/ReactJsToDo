import React, { PureComponent } from 'react';
import {
	Button,
	DropdownButton,
	Dropdown
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './List.css';
import BookShortTemplate from './../BookShortTemplate';
import Book from './../Book';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
	showTemplate,
	ratingSearch,
	complitedBookCheck,
	addBookAction,
	removeBook,
	copyBook
} from './../../actions/actionCreator';
import { RATING, DEFAULT_STATE_OF_BOOK_SHORT_TEMPLATE } from './../../constans';

class List extends PureComponent {
	static propTypes = {
		children: PropTypes.element,
	}

	static defaultProps = {
		children: null,
	}

	state = {
		bookShortTemplate: {
			inputTitleText: '',
			status: '',
			rating: '',
			comment: '',
			showData: {
				status: '',
				title: '',
				rating: '',
				comment: ''
			}
		}
	}

	openTemplate = () => {
		const { showTemplate } = this.props;
		showTemplate(true);
	}

	cancel = (e) => {
		e.preventDefault();
		const { showTemplate } = this.props;
		showTemplate(false);
		this.setState({ bookShortTemplate: DEFAULT_STATE_OF_BOOK_SHORT_TEMPLATE });
	}

	addBook = (e) => {
		e.preventDefault();
		const oNewBook = this._bookCreated();
		const { addBookAction, showTemplate } = this.props;
		addBookAction(oNewBook);
		showTemplate(false);
		this.setState({ bookShortTemplate: DEFAULT_STATE_OF_BOOK_SHORT_TEMPLATE });

	}

	_bookCreated = () => {
		let book = {};
		book = { ...this.state.bookShortTemplate.showData };
		book.id = new Date().toString();
		book.done = false;
		book.show = true;
		return book;
	}

	createBook = (propertyOfBook) => {
		if (propertyOfBook.title) {
			const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
			bookShortTemplateCopy.inputTitleText = propertyOfBook.title;
			bookShortTemplateCopy.showData.title = propertyOfBook.title;
			this.setState({ bookShortTemplate: bookShortTemplateCopy });
		}
		if (Object.keys(propertyOfBook).some((property) => property === 'important')) {
			const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
			bookShortTemplateCopy.status = propertyOfBook.important;
			bookShortTemplateCopy.showData.status = propertyOfBook.important;
			this.setState({ bookShortTemplate: bookShortTemplateCopy });
		}
		if (propertyOfBook.rating) {
			const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
			bookShortTemplateCopy.rating = propertyOfBook.rating;
			bookShortTemplateCopy.showData.rating = propertyOfBook.rating;
			this.setState({ bookShortTemplate: bookShortTemplateCopy });
		}
		if (propertyOfBook.comment) {
			const bookShortTemplateCopy = { ...this.state.bookShortTemplate };
			bookShortTemplateCopy.comment = propertyOfBook.comment;
			bookShortTemplateCopy.showData.comment = propertyOfBook.comment;
			this.setState({ bookShortTemplate: bookShortTemplateCopy })
		}
	}

	complitedOfBook = (oStatus) => {
		const { complitedBookCheck } = this.props;
		complitedBookCheck(oStatus);
	}

	deleteBook = (e, id) => {
		e.preventDefault();
		const { removeBook } = this.props;
		removeBook(id);
	}

	copyBook = (e, id) => {
		e.preventDefault();
		const { copyBook } = this.props;
		copyBook(id);
	}

	searchFilter = (e) => {
		const sValue = e.target.value;
		const aList = [...this.state.list];
		aList.forEach((oBook) => {
			if (!this._validated(sValue, oBook)) {
				oBook.show = false;
			} else {
				oBook.show = true;
			};
		});
		this.setState({ list: aList });
	}

	_validated = (sValue, oBook) => {
		let bShowBook = false;
		const sValueLength = sValue.length;
		const aAllFields = [];
		const aComment = oBook.comment.split(' ');
		aAllFields.push(oBook.status);
		aAllFields.push(oBook.title);
		const aResult = aAllFields.concat(aComment);
		aResult.forEach((sElement) => {
			if (sElement.substr(0, sValueLength) === sValue) {
				bShowBook = true;
			};
		});
		return bShowBook;
	}

	handlerSelectedRating = (eventKey) => {
		const { ratingSearch } = this.props;
		ratingSearch(eventKey);
	}

	render() {
		const { bookShortTemplate } = this.state;
		const { show,
			filterText,
			list
		} = this.props;

		return (
			<div className="wrapper">
				<section className="toollbar">
					<input className="searchField" type="text" placeholder="Search..." onChange={this.searchFilter} />
					<DropdownButton id="dropdown-item-button" title="Sorting Rating" onSelect={this.handlerSelectedRating}>
						<Dropdown.Item eventKey="" as="button">none</Dropdown.Item>
						<Dropdown.Item eventKey="poor" as="button">Poor</Dropdown.Item>
						<Dropdown.Item eventKey="middle" as="button">Middle</Dropdown.Item>
						<Dropdown.Item eventKey="great" as="button">Great</Dropdown.Item>
					</DropdownButton>
					<Button onClick={this.openTemplate} variant="primary">
						Create new book
					</Button>
				</section>
				<section className={show ? 'displayTemplate' : 'createNewBook'}>
					<BookShortTemplate bookShortTemplate={bookShortTemplate} createNewBook={this.createBook} rating={RATING} addBook={this.addBook} cancel={this.cancel} />
				</section>
				<section>
					<Book list={list} complitedOfBook={this.complitedOfBook} deleteBook={this.deleteBook} copyBook={this.copyBook} ratingSearch={filterText} />
				</section>
			</div>
		);
	}

}

export default connect(state => ({
	show: state.show,
	filterText: state.ratingSearch,
	list: state.list,
}), {
	showTemplate,
	ratingSearch,
	complitedBookCheck,
	addBookAction,
	removeBook,
	copyBook
})(List);
