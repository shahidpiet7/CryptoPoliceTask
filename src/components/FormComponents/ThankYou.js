import React, { Component } from 'react';
import './ThankYou.scss';
import './FormSteps.scss';

class ThankYou extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { email, mobile, category, password, code, name, website, country, avatar } 
    } = this.props;
    console.log(this.props.values);

    return (
        <React.Fragment>
        <div>
              <h5 className="text-center whiteHeading">Multi step form </h5>
                <div className="form-steps">
                    {/* First step */}
                    <div className="form-steps__step step__01 form-steps__step--completed">
                        <div className="form-steps__step-circle">
                            <span className="form-steps__step-number">1</span>
                            <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Register</span>
                    </div>
                    {/* Second step */}
                    <div className="form-steps__step step__02 form-steps__step--completed">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">2</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Security code</span>
                    </div>
                    {/* Thired step */}
                    <div className="form-steps__step step__03 form-steps__step--completed">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">3</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">User profile</span>
                    </div>
                    {/* Four step */}
                    <div className="form-steps__step step__04 form-steps__step--active">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">4</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Thank you</span>
                    </div>
                </div>
              </div> {/* end steps */}

          <div className="ThankyouDashboardDiv">
            <h4>Thank You! Your profile is created</h4>
          <div className="container">
            <div className="row pt-3">
              <div className="col-md-3">
                <div className="ProfilePicBox">
                  <div className="AvatarBox">
                  <img src={avatar} alt="Avatar" />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="UserInfoBox UserInfoBoxLeft">
                  <p>Name: {name}</p>
                  <p>E-mail: {email}</p>
                  <p>Mobile: {mobile}</p>
                </div>
              </div>
              <div className="col-md-5">
                <div className="UserInfoBox UserInfoBoxRight">
                  <p>Category: {category}</p>
                  <p>From: {country}</p>
                  <p>Website: {website}</p>
                </div>
              </div>
            </div>
            <div className="WebsiteAnalyses mt-3">
              <h5>Your website {website} analyses</h5>
              <p>Low Rise</p>
              <img src="./images/star-rating.png" alt="star" />
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <div className="DomainDetais">
                  <p>Domain registration date: 1.12.1992</p>
                  <p>Domain expiration date: 30.11.2019</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="DomainDetais">
                  <p>Phishtank Status: Nothing Found</p>
                  <p>Etherscam DB: Nothing Found</p>
                </div>
              </div>
              <div className="col-12 TrustworthinessDiv text-center">
                <h5>Trustworthiness: 4.7 / 5.0</h5>
              </div>
            </div>
            <ul className="smileyDescripWrap">
              <li>
                <div className="row">
                  <div className="col-2">
                    <div className="smileyFace">
                      <img src="./images/smiley-Icon-white.png" alt="Icon" />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="DescriptionContent">
                      <ul className="uppertTextUl">
                        <li>X-Pilot</li>
                        <li>May 15, 2008</li>
                      </ul>
                      <p>One of the best resource about phishing and how to fight with it ;)</p>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-2">
                    <div className="smileyFace">
                      <img src="./images/smiley-Icon-white.png" alt="Icon" />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="DescriptionContent">
                      <ul className="uppertTextUl">
                        <li>X-Pilot</li>
                        <li>May 15, 2008</li>
                      </ul>
                      <p>One of the best resource about phishing and how to fight with it ;)</p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </React.Fragment>
    );
  }
}

export default ThankYou;
