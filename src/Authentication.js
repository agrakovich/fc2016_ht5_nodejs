import React from 'react';

class Authentication extends React.Component {

    componentDidMount() {
        document.title = 'Authentication';
    }

    render() {
        const { dispatch } = this.props;
        return (
            <div>auth</div>
        );
    }

}

export default Authentication;
