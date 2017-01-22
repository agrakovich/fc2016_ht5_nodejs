import React from 'react';

class ArticlesPage extends React.Component {

    componentDidMount() {
        document.title = 'Articles';
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div></div>
        );
    }

}

export default ArticlesPage;
