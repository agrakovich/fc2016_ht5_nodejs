import React, { PropTypes } from 'react';
//import s from './Layout.scss';

class Layout extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        return (
            <div className="layout">
                <header className="layout__header">
                    Articles
                </header>
                <main className="layout__body">
                    <section className="layout__page">
                        <div className="wrapper">
                            asdasdasdasdasd
                            <div {...this.props} className={this.props.className} />
                        </div>
                    </section>
                </main>
                <footer className="layout__footer">
                </footer>
            </div>
        );
    }
}

export default Layout;
