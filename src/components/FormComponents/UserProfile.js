import React, { Component } from 'react';
import './FormSteps.scss';

class UserProfile extends Component {
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
                    <div className="form-steps__step step__02 form-steps__step--completed">
                        <div className="form-steps__step-circle">
                        <span className="form-steps__step-number">2</span>
                        <span className="form-steps__step-check">&#x2713;</span>
                        </div>
                        <span className="form-step__step-name">Security code</span>
                    </div>
                    {/* Thired step */}
                    <div className="form-steps__step step__03 form-steps__step--active">
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
            <div className="col-md-8 ml-auto text-left">
                  <h5>Complete your User profile</h5>
              </div>
            </div>
          <div className="row rowDiv">
            <div className="col-md-3">
              <div className="LabelWrap">
                <label>Name*</label>
              </div>
            </div>
            <div className="col-md-9">
            <input type="text" defaultValue={values.name} onChange={handleChange('name')} placeholder="Name" required/>
            <p className="validationMsg">{errors.nameError}</p>
            </div>
          </div>
          <div className="row rowDiv">
            <div className="col-md-3">
              <div className="LabelWrap">
                <label>Website*</label>
              </div>
            </div>
            <div className="col-md-9">
              <input type="url" onChange={handleChange('website')} defaultValue={values.website} placeholder="Website" required/>
              <p className="validationMsg">{errors.websiteError}</p>
            </div>
          </div>
          <div className="row rowDiv">
            <div className="col-md-3">
              <div className="LabelWrap">
                <label>Country*</label>
              </div>
            </div>
            <div className="col-md-9">
            <select defaultValue={values.country} onChange={handleChange('country')} required>
              <option value="" disabled >Choose Country</option>
              <option value="Austria" >Austria</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
            </select>
            <p className="validationMsg">{errors.countryError}</p>
            </div>
          </div>
          <div className="row rowDiv">
            <div className="col-md-3">
              <div className="LabelWrap">
                <label>Avatar</label>
              </div>
            </div>
            <div className="col-md-9">
              <input type="file" onChange={handleChange('avatar')} defaultValue={values.avatar} id="fileId"/>
            </div>
          </div>

          <div className="row rowDiv">
            <div className="col-md-3">
            </div>
              <div className="col-md-9">
                <div className="buttonWrap">
                  <button label="Confirm and Continue" onClick={this.continue} className="blueButton">
                    Create your profile
                  </button>
                </div>
                </div>
            </div>

            <div className="row rowDiv">
            <div className="col-md-3">
            </div>
              <div className="col-md-9">
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



export default UserProfile;
