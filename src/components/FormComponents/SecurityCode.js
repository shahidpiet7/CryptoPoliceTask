import React, { Component } from 'react';
import './securityCode.scss';
import './FormSteps.scss';


export class SecurityCode extends Component {
  continue = e => {
    e.preventDefault();
    const err = this.props.validate();
    if(!err){
      this.props.nextStep();
    }
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
  const { values, handleChange, errors } = this.props;
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
                    <div className="form-steps__step step__02 form-steps__step--active">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">2</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Security code</span>
                    </div>
                    {/* Thired step */}
                    <div className="form-steps__step step__03 form-steps__step--incpmplete">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">3</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">User profile</span>
                    </div>
                    {/* Four step */}
                    <div className="form-steps__step step__04 form-steps__step--incpmplete">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">4</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Thank you</span>
                    </div>
                </div>
              </div> {/* end steps */}

          <div className="formInnerDiv">
            <div className="row rowDiv">
              <div className="col-md-12">
                  <h4>Create your security code</h4>
                  <p>Enter code bellow</p>
              </div>
              {/* <div className="col-md-8 m-auto">
                <div className="seurityCodeBox">
                {securityCode}
                </div>
              </div> */}
              <div className="col-md-8 m-auto">
                <input type="text" onChange={handleChange('code')} defaultValue={values.code} placeholder="Enter security code" required/>
                <p className="validationMsg">{errors.codeError}</p>
              </div>
              
            </div>
            <div className="row rowDiv">
              <div className="col-md-8 m-auto">
                <div className="buttonWrap">
                  <button label="Continue" onClick={this.continue} className="blueButton">
                    Save and go further
                  </button>
                </div>
                </div>
            </div>

            <div className="row rowDiv">
              <div className="col-md-6 m-auto">
                <div className="linkButtonWrap">
                  <button label="Back" onClick={this.back} className="linkButton">
                    Or go back
                  </button>
                </div>
                </div>
            </div>
          </div>
        </React.Fragment>
    );
  }
}

export default SecurityCode;
