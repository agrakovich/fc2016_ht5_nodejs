import React from 'react'
import Layout from './Layout'
import ArticlesPage from './pages/Articles'
import LoginPage from './pages/Login'
import { Route, IndexRoute } from 'react-router'

export const routes = (
    <div>
        <Route path='/' component={Layout}>
            <IndexRoute component={ArticlesPage} />
            <Route path='/auth' component={LoginPage} />
        </Route>
    </div>
)