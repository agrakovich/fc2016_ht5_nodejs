import React from 'react'

import Layout from './Layout'
import Article from './Article'
import Authentication from './Authentication'

import { Route, IndexRoute } from 'react-router'


export const routes = (
    <div>
        <Route path='/' component={Layout}>
            <IndexRoute component={Article} />
            <Route path='auth' component={Authentication} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)