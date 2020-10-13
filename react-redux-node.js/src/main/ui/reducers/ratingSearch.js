import { RATING_SEARCH } from '../constans';

const ratingSearch = (state = '', { text, type }) => {
    switch (type) {
        case RATING_SEARCH:
            return text;
        default:
            return state;
    }
}

export default ratingSearch;
