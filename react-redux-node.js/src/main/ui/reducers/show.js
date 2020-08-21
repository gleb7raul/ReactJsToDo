import { SHOW_TEMPLATE } from '../constans';

const show = (state = false, { show, type }) => {
    switch (type) {
        case SHOW_TEMPLATE:
            return show;
        default:
            return state;
    }
}

export default show;
