import React from 'react'
import Layout from './Layout'
import ArticlesPage from './articles/containers/Articles'
import ArticleEditor from './articles/containers/ArticleEditor'
import LoginPage from './pages/Login'
import { Route, IndexRoute } from 'react-router'

export const routes = (
    <div>
        <Route path='/' component={Layout}>
            <IndexRoute component={ArticlesPage} />
            {/*<Route path='/auth' component={LoginPage} />*/}
            <Route path="/article_editor" component={ArticleEditor} />
            <Route path="/article_editor/:id" component={ArticleEditor} />
            {/*<Route path="/article/:id" component={Article} />*/}
        </Route>
    </div>
)