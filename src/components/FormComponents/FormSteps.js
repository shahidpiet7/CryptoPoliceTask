import React, { Component } from 'react';
import './FormSteps.scss';

class FormSteps extends Component {
    
    render() {
        
        return (
            <React.Fragment>
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
            </React.Fragment>
        );
    }
}
 
export default FormSteps;