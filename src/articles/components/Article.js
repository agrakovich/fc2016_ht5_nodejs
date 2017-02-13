import React from 'react';
import { Link } from 'react-router';
import renderHTML from 'react-render-html';

const Article = props => {
    const {article, canModify, deleteAction} = props;
    return (
        <article>
            <header>
                <h1>{article.title}</h1>
            </header>
            <div>
                <div>
                    { renderHTML(article.text) }
                </div>
                <span className="article__details-date">
                    {new Date(article.dateCreated).toDateString()}
                </span>
            </div>
            <footer>
                <span>
                    <Link to={`/article_editor/${article._id}`}>
                        <i></i> Edit Article
                    </Link>
                    <button onClick={deleteAction(article._id)}>
                        <i></i> Delete Article
                    </button>
                </span>
            </footer>
        </article>
    );
};

export default Article;