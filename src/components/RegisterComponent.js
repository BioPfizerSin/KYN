import React, { Component } from 'react';
import UserService from '../services/UserService';

class RegisterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            userPassword: '',
            firstName: '',
            lastName: '',
            email: ''
        }
    }
    login = (e) => {
        this.props.history.push(`/login`);
    }
    home = (e) => {
        this.props.history.push(`/`);
    }
    changeUserNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ userName: event.target.value });
    }
    changeUserPasswordHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ userPassword: event.target.value });
    }
    changeFirstNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ lastName: event.target.value });
    }
    changeEmailHandler = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ email: event.target.value });
    }
    saveUser = (e) => {
        e.preventDefault();
        console.log('this is save method');
        let users = {
            userName: this.state.userName, userPassword: this.state.userPassword,
            firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email
        };
        UserService.createUser(users).then(res => {
            console.log("create component" + JSON.stringify(res.data));
            this.props.history.push('/login');
        });
    }
    cancel = (e) => {
        this.props.history.push('/');
    }

    render() {

        return (
            <div>

                <div class="mt-5 container shadow-lg p-3 mb-5 bg-white rounded"
                    style={{ width: "50vh", margin: "auto" }}>

                    <div class="container-fluid text-center">
                        <h3 style={{ fontWeight: "bold" }}>Sign Up</h3>
                        <hr class="divider pt-2 rounded" />
                    </div>

                    <form>
                        <div className="form-floating mt-3">

                            <input placeholder=" User Name" id="floatingInput" name="firstName" className="form-control  mt-1"

                                onChange={this.changeFirstNameHandler} />
                            <label for="floatingInput" > First Name</label>
                        </div>
                        <div className="form-floating mt-3">

                            <input placeholder=" Last Name" id="floatingInput" name="lastName" className="form-control  mt-1"

                                onChange={this.changeLastNameHandler} />
                            <label for="floatingInput">Last Name</label>
                        </div>
                        <div className="form-floating mt-3">

                            <input placeholder=" User Name" id="floatingInput" name="email" className="form-control  mt-1"

                                onChange={this.changeEmailHandler} />
                            <label for="floatingInput">Email</label>
                        </div>
                        <div className="form-floating mt-3">

                            <input placeholder=" User Name" id="floatingInput" name="userName" className="form-control  mt-1"

                                onChange={this.changeUserNameHandler} />
                            <label for="floatingInput">Username</label>
                        </div>
                        <div className="form-floating mt-3">

                            <input placeholder="Password" id="floatingInput" name="userPassword" className="form-control  mt-1"

                                onChange={this.changeUserPasswordHandler} />
                            <label for="floatingInput">Password</label>
                        </div>

                        <div className="text-right p-2">
                            <button onClick={this.saveUser} class="btn btn-primary container-fluid">Register</button></div>

                        <div class="container-fluid text-center">
                            <hr />
                            <small>Have an account? <a href="/register"
                                class="text-muted">Login Now</a></small>
                        </div>



                    </form>
                </div>
            </div>


        )
    }

}

export default RegisterComponent