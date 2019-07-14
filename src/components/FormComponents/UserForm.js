import React, { Component } from 'react';
import './UserForm.scss';
import Register from './Register';
import SecurityCode from './SecurityCode';
import UserProfile from './UserProfile';
import ThankYou from './ThankYou';

export class UserForm extends Component {
  state = {
    step: 1,
    email: '',
    emailError: '',
    mobile: '',
    mobileError: '',
    category: '',
    categoryError: '',
    password: '',
    passwordError: '',
    checkbox: true,
    checkboxError: '',
    securityCode: '6X24T04',
    securityCodeError: '',
    code: '',
    codeError: '',
    name: '',
    nameError: '',
    website: '',
    websiteError: '',
    country: '',
    countryError: '',
    avatar: ''
  };

  // Validation Step1
  validateStep1 = () => {
    let isError = false;
    let fieldState = this.state;
    const errors = {
      emailError: "",
      mobileError: "",
      categoryError: "",
      passwordError:"",
      checkboxError:"",
    };
    if (fieldState.email.indexOf("@", 1) === -1 || fieldState.email.indexOf(".", 2) < 0 ) {
      isError = true;
      errors.emailError = "Requires valid email";
      console.log(errors.emailError);
    }
    if (!fieldState.mobile.match(/^[0-9]{10}$/))  {
      isError = true;
      errors.mobileError = "Requires a 10 digit number";
      console.log(errors.mobileError);
    }
    if (this.state.category == null || this.state.category ==='') {
      isError = true;
      errors.categoryError = "Select one Category";
    }
    if (this.state.password == null || this.state.password ==='' || this.state.password.length < 6) {
      isError = true;
      errors.passwordError = "The password is too short";
    }
    if(this.state.checkbox === true){
      isError = true;
      errors.checkboxError = "Check the box";
      console.log(errors.checkboxError);
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  // Validation Step2
  validateStep2 = () => {
    let isError = false;
    const errors = {
      codeError: ""
    };
    if (this.state.code !== this.state.securityCode) {
      isError = true;
      errors.codeError = "Security code not match";
    }
    this.setState({
      ...this.state,
      ...errors
    });
    return isError;
  };

  // Validation Step3
  validateStep3 = () => {
    let isError = false;
    let fieldState = this.state;
    const errors = {
      nameError: "",
      websiteError: "",
      countryError: ""
    };
    if (fieldState.name.length < 3 ) {
      isError = true;
      errors.nameError = "Requires valid name";
      console.log(errors.nameError);
    }
    if (!fieldState.website.match(/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/))  {
      isError = true;
      errors.websiteError = "Requires valid URL";
      console.log(errors.websiteError);
    }
    if (this.state.country == null || this.state.country ==='') {
      isError = true;
      errors.countryError = "Select one country";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
    this.setState({checkbox: !this.state.checkbox});
    console.log(this.state.checkbox);
  };

 
  //  securityCodeFunc = e => {
  //     this.setState({securityCode: Math.floor(Math.random() * 90000) + 10000});
  //     console.log(this.state.securityCode);
  //   }


  // Proceed to next step
  nextStep = () => {
    const { step,  } = this.state;
    this.setState({
      step: step + 1
    });
};

// Go back to prev step
prevStep = () => {
  const { step } = this.state;
  this.setState({
    step: step - 1
  });
};
 

  render() {
    const { step } = this.state;
    const { email, mobile, category, password, code, name, website, country, avatar } = this.state;
    const values = { email, mobile, category, password, code, name, website, country, avatar };
    const {checkbox} = this.state;
    const {emailError, mobileError, categoryError, passwordError, checkboxError, codeError, nameError, websiteError, countryError } = this.state;
    const errorMeaasge = {emailError, mobileError, categoryError, passwordError, checkboxError, codeError, nameError, websiteError, countryError };
    const { securityCode } = this.state;

    switch (step) {
      case 1:
        return (
          <div>
            <Register
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
              checkbox={checkbox}
              validate={this.validateStep1}
              errors={errorMeaasge}
            />
          </div>
          
        );
      case 2:
        return (
          <div>
            
          <SecurityCode
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            securityCode={securityCode}
            validate={this.validateStep2}
            errors={errorMeaasge}
          />
          </div>
        );
      case 3:
        return (
          <UserProfile
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            validate={this.validateStep3}
            errors={errorMeaasge}
          />
        );
      case 4:
        return(
          <ThankYou 
          values={values}
          />
        );
    }
  }
}


