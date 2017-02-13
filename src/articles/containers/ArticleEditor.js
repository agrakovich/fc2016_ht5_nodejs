'use strict';

import React from 'react';
import { connect } from 'react-redux';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, ContentState } from 'draft-js';
import * as articleActions from '../actions';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

const mapStateToProps = state => ({
    articleId: state.article.articleId,
    title: state.article.title,
    text: state.article.text,
    editorState: state.article && state.article.articleId ?
        EditorState.createWithContent(ContentState.createFromBlockArray(htmlToDraft(state.article.text))):
        EditorState.createEmpty()
});

const mapDispatchToProps = dispatch => ({
    onLoad: payload => dispatch(articleActions.initializeEditor(payload)),
    onUnload: payload => dispatch(articleActions.unloadEditorPage()),
    onSubmit: payload => dispatch(articleActions.submitEditorForm(payload)),
    onUpdateField: (key, value) => dispatch({ type: 'UPDATE_FIELD_EDITOR', key, value })
});


class ArticleEditor extends React.Component {
    constructor() {
        super();

        const updateFieldEvent = key => ev => this.props.onUpdateField(key, ev.target.value);
        this.changeTitle = updateFieldEvent('title');
        this.onEditorStateChange = (editorState) => this.setState({editorState});

        this.submitForm = ev => {
            ev.preventDefault();
            console.log(this.props.editorState.getCurrentContent());
            const article = {
                title: this.props.title,
                text: draftToHtml(this.props.editorState.getCurrentContent()),
            };

            this.props.onSubmit({...article, id: this.props.articleId});
        };
    }

    componentWillMount() {
        if (this.props.params.id) {
            return this.props.onLoad(this.props.params.id);
        }
        this.props.onLoad(null);
    }

    componentWillUnmount() {
        this.props.onUnload();
    }

    render() {
        return (
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
                            <Editor editorState={this.props.editorState}
                                    onEditorStateChange={this.onEditorStateChange} />
                        </fieldset>

                        <button
                            disabled={this.props.inProgress}
                            onClick={this.submitForm}>
                            Publish Article
                        </button>
                    </fieldset>
                </form>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleEditor);