'use strict';
import * as articleActions from './actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case articleActions.GET_ARTICLES_REQUEST:
            return {
                ...state,
                isFetching: true,
            };
            break;
        case articleActions.GET_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.articles
            };

    }

    return state;
};