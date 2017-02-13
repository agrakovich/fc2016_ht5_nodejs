'use strict';
import * as articleActions from './actionTypes'

export default (state = {}, action) => {
    switch (action.type) {
        case articleActions.GET_ARTICLES_REQUEST:
        case articleActions.GET_ARTICLE_REQUEST:
        case articleActions.POST_ARTICLE_REQUEST:
        case articleActions.PUT_ARTICLE_REQUEST:
        case articleActions.DELETE_ARTICLE_REQUEST:
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
        case articleActions.GET_ARTICLE_SUCCESS:
            return {
                ...state,
                articleId: action._id ? action._id : '',
                title: action.title ? action.title : '',
                text: action.text ? action.text : '',
            };
        case articleActions.POST_ARTICLE_SUCCESS:
        case articleActions.PUT_ARTICLE_SUCCESS:
        case articleActions.CREATE_NEW_ARTICLE:
            return {
                ...state,
                articleId: '',
                title: '',
                text: ''
            };
        case articleActions.EDITOR_PAGE_UNLOADED:
            return {};

        case 'UPDATE_FIELD_EDITOR':
            return { ...state, [action.key]: action.value };

    }

    return state;
};