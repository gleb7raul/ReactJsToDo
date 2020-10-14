import {
    ADD_BOOK,
    COMPLITED_BOOK_CHECK,
    REMOVE_BOOK,
    COPY_BOOK
} from '../constans';

const list = (state = [], { book, id, type }) => {
    switch (type) {
        case COMPLITED_BOOK_CHECK:
            return state.map((oBook) => {
                if (oBook.id === book.id) {
                    oBook.done = book.status;
                }
                return oBook;
            });
        case ADD_BOOK:
            return [...state, book];
        case REMOVE_BOOK:
            return [...state].filter(oBook => oBook.id !== id);
        case COPY_BOOK:
            const aCurrentListOfBook = [...state];
            aCurrentListOfBook.forEach((oBook) => {
                if (oBook.id === id) {
                    const oNewBook = { ...oBook };
                    oNewBook.id = new Date().toString();
                    aCurrentListOfBook.push(oNewBook);
                };
            });
            return aCurrentListOfBook;
        default:
            return state;
    }
}

export default list;
