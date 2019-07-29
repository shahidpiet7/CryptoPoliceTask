import React, { Component } from 'react';
import './Home.scss';
import { UserForm } from './FormComponents/UserForm';

class Home extends Component {
    render() {
        return (
            <section className="homeSec">
                <div className="container">
                    <div className="headingWrap">
                        <h1>React.js Multi-Step form </h1>
                        <p>You need to fill all the fields.</p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-8 m-auto">
                            {/* <FormSteps /> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="FormDiv">
                                <UserForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;