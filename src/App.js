import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import { loginUser } from "./Redux/Action/AuthLogin";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      // use dynamic name value to set our state object property
      [name]: value
    });
  }

  handleLoginSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.state.email && this.state.password) {
      let data = {
        email: this.state.email,
        password: this.state.password
      };
      console.log("Before login api call", data);
      this.props.loginUser(data);
    } else console.log("empty");
  };

  render() {
    return (
      <div>
        <form
          className="modal-content"
          ref={ref => (this.loginForm = ref)}
          onSubmit={this.handleLoginSubmit}
        >
          <div className="form-group">
            <input
              ref={ref => (this.emailInput = ref)}
              // className={`form-control ${this.errorClass(
              //   this.state.formErrors.email
              // )}`}
              placeholder="Email"
              type="email"
              name="email"
              // value={this.state.username}
              onInput={this.handleChange}
              onChange={e => {
                this.setState({ email: e.target.value });
              }}
            />
          </div>

          <div className="form-group">
            <input
              ref={ref => (this.passwordInput = ref)}
              // className={`form-control ${this.errorClass(
              //   this.state.formErrors.password
              // )}`}
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              value={this.state.password}
              onInput={this.handleChange}
              onChange={e => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>

          <button type="submit" className="modal-login-btn">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    loginUser: data => dispatch(loginUser(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
