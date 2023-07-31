import React, { Component } from 'react';
import UserService from '../services/UserService';
import FacebookLogin from 'react-facebook-login';

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: false,
            userName: '',
            userPassword: '',
            error_message: ''
        }
    }
    addUser = (e) => {
        this.props.history.push(`/register`);
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
    loginUser = (e) => {
        e.preventDefault();
        console.log('this is login method');
        let users = { userName: this.state.userName, userPassword: this.state.userPassword };

        UserService.login(users).then(
            () => {
                this.props.history.push("/dash");
                window.location.reload();
            },
            (error) => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                this.setState({
                    errorMessage: resMessage,
                });
            }
        );

    }

    facebookResponse = (response) => {
        localStorage.setItem("user", JSON.stringify(response));
        this.setState({ ...this.state, user: response });
        this.props.history.push("/fbdashboard");
    };

    cancel = (e) => {
        this.props.history.push('/');
    }

    render() {
        const componentClicked = () => { console.log("Clicked!"); };

        const LoginButton = ({ facebookResponse }) => (
            <FacebookLogin
                appId="810176857452592"
                appSecret="7ad7b9c0ca28f63835eb9d7cfe56acfe"
                // autoLoad
                fields="name,email,picture"
                onClick={componentClicked}
                callback={facebookResponse} />
        );


        const bg = {
            overflowX: "hidden",
            width: "100%",
            margin: "0px",
            height: "696px",
            align: "center",
            backgroundImage: `url("https://bit.ly/3cbk1iU")`,
            backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
        };

        return (
            <div >

                <div class="mt-5 container shadow-lg p-3 mb-5 bg-white rounded"
                    style={{ width: "50vh", margin: "auto" }}>

                    <div class="container-fluid text-center">
                        <h3 style={{ fontWeight: "bold" }}>Log In</h3>
                        <hr class="divider pt-2 rounded" />
                    </div>


                    <form style={{ maxWidth: "400px", margin: "0 auto" }}>

                        {this.state.errorMessage && (
                            <div className="alert alert-danger" role="alert">
                                {" "}
                                {this.state.errorMessage}{" "}
                            </div>
                        )}
                        <div className="form-floating mt-3">

                            <input placeholder=" User Name" id="floatingInput" name="userName" className="form-control  mt-1"

                                onChange={this.changeUserNameHandler} />
                            <label for="floatingInput">Username</label>

                            <small id="emailHelp" class="form-text text-muted">We'll
                                never share your email with anyone else.</small>
                        </div>

                        <div className="form-floating mt-3">
                            <input placeholder="Password" id="floatingInput" name="userPassword" className="form-control  mt-1"

                                onChange={this.changeUserPasswordHandler} />
                            <label for="floatingInput">Password</label>


                            <div class="text-right">
                                <small><a href="" class="alert-link text-muted"
                                >Forgot you password?</a></small>
                            </div>
                        </div>

                        <div className="text-right p-2">
                            <button onClick={this.loginUser} class="btn btn-primary container-fluid">Login</button></div>

                        <div class="container-fluid text-center">
                            <hr />
                            <small>Don't have an account? <a href="/register"
                                class="text-muted">Sign Up Now</a></small>
                        </div>


                        <div class="container-fluid text-center">
                            <hr />
                            {this.state.user == false && (
                                <LoginButton facebookResponse={this.facebookResponse} />
                            )}

                        </div>


                    </form>




                </div>
            </div>
        )
    }
}
export default LoginComponent
