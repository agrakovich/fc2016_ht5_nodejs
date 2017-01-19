import React from 'react';

class Article extends React.Component {

    componentDidMount() {
        document.title = 'Article';
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>article</div>
        );
    }

}

export default Article;
