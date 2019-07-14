import React, { Component } from 'react';
import './Register.scss';
import './FormSteps.scss';

export class Register extends Component {
  continue = e => {
    e.preventDefault();
    const err = this.props.validate();
    if(!err){
      this.props.nextStep();
    }
    
  };

  render() {
  const { values, handleChange, errors, checkbox } = this.props;
    return (
        <React.Fragment>
              {/* steps */}
              <div>
              <h5 className="text-center whiteHeading">Multi step form </h5>
                <div className="form-steps">
                    {/* First step */}
                    <div className="form-steps__step step__01 form-steps__step--active">
                        <div className="form-steps__step-circle">
                            <span className="form-steps__step-number">1</span>
                            <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Register</span>
                    </div>
                    {/* Second step */}
                    <div className="form-steps__step step__02 form-steps__step--incpmplete">
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
              </div>
              {/* Form section */}
              <div className="formInnerDiv">
              <div className="row rowDiv">
                <div className="col-md-3">
                  <div className="LabelWrap">
                    <label>Email*</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                  type="email"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  placeholder="E-mail" required/>
                  <p className="validationMsg">{errors.emailError}</p>
                </div>
              </div>
              <div className="row rowDiv">
                <div className="col-md-3">
                  <div className="LabelWrap">
                    <label>Mobile*</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <input
                  type="tel"
                  onChange={handleChange('mobile')} 
                  defaultValue={values.mobile} 
                  placeholder="mobile" required/>
                  <p className="validationMsg">{errors.mobileError}</p>
                </div>
              </div>
              <div className="row rowDiv">
                <div className="col-md-3">
                <div className="LabelWrap">
                  <label>Category*</label>
                </div>
                </div>
                <div className="col-md-9">
                <select defaultValue={values.category} onChange={handleChange('category')} required>
                  <option value="" disabled>Select Category</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Backend">Backend</option>
                  <option value="Data Analyst">Data Analyst</option>
                  <option value="Network Engineer">Network Engineer</option>
                </select>
                <p className="validationMsg">{errors.categoryError}</p>
                </div>
              </div>
              <div className="row rowDiv">
                <div className="col-md-3">
                  <div className="LabelWrap">
                    <label>Password*</label>
                  </div>
                </div>
                <div className="col-md-9">
                  <input 
                  type="password" 
                  onChange={handleChange('password')} 
                  defaultValue={values.password} 
                  // passwordText={values.categoryError}
                  placeholder="Password" required/>
                  <p className="validationMsg">{errors.passwordError}</p>
                </div>
              </div>
              <div className="row rowDiv">
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                <div className="checkboxWrap">
                <label>
                  <input 
                  type="checkbox"
                  onChange={handleChange('checkbox')} 
                  checked={!checkbox}
                  required/> <span>Agree with terms and conditions</span>
                </label>
                <p className="validationMsg">{errors.checkboxError}</p>
                </div>
                </div>
              </div>
              <div className="row rowDiv">
                <div className="col-md-3">
                </div>
                <div className="col-md-9">
                <div className="buttonWrap">
                <button onClick={this.continue} className="blueButton">Register</button>
                </div>
                </div>
              </div>
              
            </div>
        </React.Fragment>
    );
  }
}

export default Register;
