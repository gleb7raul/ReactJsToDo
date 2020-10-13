import { SHOW_TEMPLATE, RATING_SEARCH } from './../constans';

export const showTemplate = (show) => ({
    type: SHOW_TEMPLATE,
    show,
});

export const ratingSearch = (text) => ({
    type: RATING_SEARCH,
    text,
});