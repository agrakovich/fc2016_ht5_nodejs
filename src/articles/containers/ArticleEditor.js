'use strict';

import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.editor
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
        dispatch({ type: 'EDITOR_PAGE_LOADED', payload }),
    onSubmit: payload =>
        dispatch({ type: 'ARTICLE_SUBMITTED', payload }),
    onUpdateField: (key, value) =>
        dispatch({ type: 'UPDATE_FIELD_EDITOR', key, value })
});

class ArticleEditor extends React.Component {
    constructor() {
        super();

        const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
        this.changeTitle = updateFieldEvent('title');
        this.changeText = updateFieldEvent('text');

        this.submitForm = ev => {
            ev.preventDefault();
            const article = {
                title: this.props.title,
                text: this.props.text,
            };

            const id = { slug: this.props.articleId };
            const articleAction = this.props.articleId ?
                agent.Articles.update({...article, id}) :
                agent.Articles.create(article);

            this.props.onSubmit(articleAction);
        };
    }

    componentWillMount() {
        if (this.props.articleId) {
            return this.props.onLoad(this.props.articleId);
        }
        this.props.onLoad(null);
    }

    render() {
        return (
            <div>
                <div>
                    <div>
                        <div>
                            <form>
                                <fieldset>
                                    <fieldset>
                                        <input
                                            type="text"
                                            placeholder="Article Title"
                                            value={this.props.title}
                                            onChange={this.changeTitle} />
                                    </fieldset>

                                    <fieldset>
                                        <textarea
                                            rows="8"
                                            placeholder="Write your article (in markdown)"
                                            value={this.props.text}
                                            onChange={this.changeText}>
                                        </textarea>
                                    </fieldset>

                                    <button
                                        disabled={this.props.inProgress}
                                        onClick={this.submitForm}>
                                        Publish Article
                                    </button>
                                </fieldset>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);