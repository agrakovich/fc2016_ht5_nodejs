import React, { PropTypes } from 'react';
import { Link } from 'react-router'
//import s from './Layout.scss';

class Layout extends React.Component {

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        return (
            <div className="layout">
                <header className="layout__header">
                    <ul>
                        <li><Link to='/'>Articles</Link></li>
                    </ul>
                </header>
                <main className="layout__body">
                    <section className="layout__page">
                        <div className="wrapper">
                            <div className={this.props.className}>{this.props.children} </div>
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
