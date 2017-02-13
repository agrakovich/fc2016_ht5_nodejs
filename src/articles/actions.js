import * as articleActions from './actionTypes'
import config from '../config';

export function getArticles() {

    const articlesRequest = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
    }

    return dispatch => {
        dispatch(requestArticles())
        return fetch(`${config.apiUrl}${config.articlesRoute}`, articlesRequest)
            .then(response => response.json().then(articles => ({ articles, response })))
            .then(({ articles, response }) => {
                if (!response.ok) {
                    return Promise.reject(articles)
                }
                return dispatch(receiveArticles(articles))
            })
            .catch(err => {
                return requestArticlesError(err)
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

export function submitEditorForm(article) {

    const isEditing = article.id ? true : false;

    const editorRequest = {
        method: isEditing ? 'PUT' : 'POST',
        body: article
    }

    return dispatch => {
        dispatch(requestSubmitEditorForm(isEditing))
        return fetch(`${config.apiUrl}${config.articlesRoute}`, editorRequest)
            .then(response => response.json().then(data => ({ data, response })))
            .then(({ data, response }) => {
                if (!response.ok) {
                    return Promise.reject()
                }
                return dispatch(submitEditorFormSuccess())
            })
            .catch(err => {
                return submitEditorFormError(isEditing, err)
            })
    }
}

function requestSubmitEditorForm(isEditing) {
    return {
        type: isEditing ? articleActions.PUT_ARTICLE_REQUEST : articleActions.POST_ARTICLE_REQUEST
    }
}
function submitEditorFormSuccess(isEditing) {
    return {
        type: isEditing ? articleActions.PUT_ARTICLE_SUCCESS : articleActions.POST_ARTICLE_SUCCESS
    }
}
function submitEditorFormError(isEditing, message) {
    return {
        type: isEditing ? articleActions.PUT_ARTICLE_FAILURE : articleActions.POST_ARTICLE_FAILURE,
        message,
    }
}

export function deleteArticle(id) {

    const deleteRequest = {
        method: 'DELETE',
        body: { id }
    }

    return dispatch => {
        dispatch(requestDeleteArticle())
        return fetch(`${config.apiUrl}${config.articlesRoute}`, deleteRequest)
            .then(response => response.json().then(data => ({ data, response })))
            .then(({ data, response }) => {
                if (!response.ok) {
                    return Promise.reject()
                }
                return dispatch(deleteArticleSuccess())
            })
            .catch(err => {
                return deleteArticleError(err)
            })
    }
}

function requestDeleteArticle() {
    return {
        type: articleActions.DELETE_ARTICLE_REQUEST
    }
}
function deleteArticleSuccess() {
    return {
        type: articleActions.DELETE_ARTICLE_SUCCESS,
    }
}
function deleteArticleError(message) {
    return {
        type: articleActions.DELETE_ARTICLE_FAILURE,
        message,
    }
}


export function initializeEditor(id) {

    if(id){
        const articleRequest = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        }

        return dispatch => {
            dispatch(requestArticle())
            return fetch(`${config.apiUrl}${config.articlesRoute}/${id}`, articleRequest)
                .then(response => response.json().then(data => ({ data, response })))
                .then(({ data, response }) => {
                    if (!response.ok) {
                        return Promise.reject(data)
                    }
                    return dispatch(receiveArticle(data.article))
                })
                .catch(err => {
                    return requestArticleError(err)
                })
        }
    }else{
        return dispatch => {
            dispatch(createNewArticle())
        }
    }
}

function requestArticle() {
    return {
        type: articleActions.GET_ARTICLE_REQUEST
    }
}
function receiveArticle(article) {
    return {
        type: articleActions.GET_ARTICLE_SUCCESS,
        ...article
    }
}
function requestArticleError(message) {
    return {
        type: articleActions.GET_ARTICLE_FAILURE,
        message,
    }
}
function createNewArticle(){
    return {
        type: articleActions.CREATE_NEW_ARTICLE
    }
}

export function unloadEditorPage(){
    return {
        type: articleActions.EDITOR_PAGE_UNLOADED
    }
}

