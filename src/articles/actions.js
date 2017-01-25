import * as articleActions from './actionTypes'
import config from '../config';

export function getArticles() {

    const articlesRequest = {
        method: 'GET',
    }

    return dispatch => {
        dispatch(requestArticles())
        return fetch(`${config.apiUrl}${config.articlesRoute}`, articlesRequest)
            .then(response => response.json().then(articles => ({ articles, response })))
            .then(({ articles, response }) => {
                if (!response.ok) {
                    //dispatch error
                    return Promise.reject(articles)
                }

                return dispatch(receiveArticles(articles))
            })
            .catch(err => {
                console.log('Error: ', err)
            })
    }
}

function requestArticles() {
    return {
        type: articleActions.GET_ARTICLES_REQUEST
    }
}
function receiveArticles(articles) {
    return {
        type: articleActions.GET_ARTICLES_SUCCESS,
        articles: articles
    }
}
function requestArticlesError(message) {
    return {
        type: articleActions.GET_ARTICLES_FAILURE,
        message,
    }
}

function requestAddArticles() {
    return {
        type: articleActions.POST_ARTICLE_REQUEST
    }
}
function AddArticleSuccess(articles) {
    return {
        type: articleActions.POST_ARTICLE_SUCCESS
    }
}
function AddArticleError(message) {
    return {
        type: articleActions.POST_ARTICLE_FAILURE,
        message,
    }
}

function requestDeleteArticle() {
    return {
        type: articleActions.DELETE_ARTICLE_REQUEST
    }
}
function DeleteArticleSuccess(articles) {
    return {
        type: articleActions.DELETE_ARTICLE_SUCCESS,
    }
}
function DeleteArticleError(message) {
    return {
        type: articleActions.DELETE_ARTICLE_FAILURE,
        message,
    }
}

function requestEditArticle() {
    return {
        type: articleActions.PUT_ARTICLE_REQUEST
    }
}
function EditArticleSuccess(articles) {
    return {
        type: articleActions.PUT_ARTICLE_SUCCESS
    }
}
function EditArticleError(message) {
    return {
        type: articleActions.PUT_ARTICLE_FAILURE,
        message,
    }
}