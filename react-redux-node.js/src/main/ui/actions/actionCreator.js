import {
    SHOW_TEMPLATE,
    RATING_SEARCH,
    ADD_BOOK,
    COMPLITED_BOOK_CHECK,
    REMOVE_BOOK,
    COPY_BOOK
} from './../constans';

export const showTemplate = (show) => ({
    type: SHOW_TEMPLATE,
    show,
});

export const ratingSearch = (text) => ({
    type: RATING_SEARCH,
    text,
});

export const addBookAction = (book) => ({
    type: ADD_BOOK,
    book,
});

export const complitedBookCheck = (book) => ({
    type: COMPLITED_BOOK_CHECK,
    book,
});

export const removeBook = (id) => ({
    type: REMOVE_BOOK,
    id,
});

export const copyBook = (id) => ({
    type: COPY_BOOK,
    id,
});