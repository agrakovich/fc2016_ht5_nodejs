'use strict';

import Article from './Article';
import React from 'react';

const ArticleList = props => {

    const {articles, author, deleteAction} = props;

    if (!articles) {
        return (
            <div>Loading ...</div>
        );
    }

    if (articles.length === 0) {
        return (
            <div>
                No articles are here... yet.
            </div>
        );
    }

    return (
        <div className="article-list">
            {articles.map(article => {
                    return (
                        //temporary kludge for auth
                        <Article article={article} deleteAction={deleteAction} canModify={article.author == "admin"} key={article._id} />
                    );
            })}
        </div>
    );
};

export default ArticleList;