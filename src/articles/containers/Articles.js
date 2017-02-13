import React from 'react';
import ArticleList from '../components/ArticleList';
import * as articleActions from '../actions';
import { connect } from 'react-redux';

class ArticlesPage extends React.Component {

    componentWillMount() {
        this.props.onLoad();
    }

    componentDidMount() {
        document.title = 'Articles';
    }

    render() {
        return (
            <ArticleList articles={this.props.articles} author="admin" deleteAction={this.props.deleteArticle} />
        );
    }

}

const mapStateToProps = (state, ownProps) => ({
    articles: state.article.articles,
});
const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch(articleActions.getArticles()),
    deleteArticle: () => dispatch(articleActions.getArticles),
});


export default connect(mapStateToProps, mapDispatchToProps)(ArticlesPage);
