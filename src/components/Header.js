import React, { Component } from 'react';
import './Header.scss';
import 'font-awesome/css/font-awesome.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Link } from 'react-router-dom';

export class Header extends Component {

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
        <div className="navSec">
            <div className="container">
                <div className="headerWrap">
                    <Link to="/">
                    <img src="./images/cryptopolice-logo2.png" alt="Logo" />
                    </Link>
                    <div className="PageName">
                        <Link to="/">Home</Link>
                        <a href="https://www.linkedin.com/in/md-shahid-rahim-ab9344117/" target="_blank"><i className="fa fa-linkedin-square"></i>Linkdin</a>
                        <a href="https://github.com/shahidpiet7" target="_blank"><i className="fa fa-github-square"></i>GitHub</a>
                    </div>
                </div>
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}



export default Header;
