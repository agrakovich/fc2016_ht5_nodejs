import React from 'react';
import Layout from './Layout';


class Authentication extends React.Component {

    componentDidMount() {
        document.title = 'Authentication';
    }

    render() {
        const { dispatch } = this.props;
        return (
            <Layout>
                <div>auth</div>
            </Layout>
        );
    }

}

export default Authentication;
