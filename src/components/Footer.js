import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="footerWrap">
                        &copy; 2019
                    </div>
                </div>
            </footer>
        );
    }
}

