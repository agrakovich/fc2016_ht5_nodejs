import React from 'react';
import { Link } from 'react-router';

const Article = props => {
    const {article, canModify, deleteAction} = props;
    return (
        <div className="article">
            <header>
                <h1>{article.title}</h1>
            </header>
            <div>
                <div>{article.text}</div>
                <span className="article__details-date">
                    {new Date(article.dateCreated).toDateString()}
                </span>
            </div>
            <footer>
                if (canModify && deleteAction) {
                    <span>
                        <Link to={`/article_editor/${article.id}`}>
                            <i></i> Edit Article
                        </Link>
                        <button onClick={deleteAction(article.id)}>
                            <i></i> Delete Article
                        </button>
                    </span>
                }

            </footer>
        </div>
    );
};

export default Article;