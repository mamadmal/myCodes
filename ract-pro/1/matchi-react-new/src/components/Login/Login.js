import React, { Component } from "react";
import "./Login.css";
import { Row } from "react-bootstrap";
import { Typography, Card, TextField } from "@material-ui/core";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { withCookies } from "react-cookie";


// import { trackPromise } from "react-promise-tracker";




class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        // this is for store the user credentials like username and password
        username: "",
        password: "",
      },
      emailError: "",
      passwordError: "",
    };
  }

  inputChanged = (event) => {
    // console.log(event.target.value);
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  login = (e) => {
    fetch(`${process.env.REACT_APP_API_URL}/auth/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        if (resp.token) {
          this.props.cookies.set("auth-token", resp);
          // console.log(resp.token);
          if (resp.user.user_profile) {
            this.props.cookies.set("profile-id", resp.user.user_profile.id);
          }
          if (resp.user.user_about) {
            this.props.cookies.set("about-id", resp.user.user_about.id);
          }
          if (resp.user.user_education) {
            this.props.cookies.set("education-id", resp.user.user_education.id);
          }
          if (resp.user.user_license) {
            this.props.cookies.set("license-id", resp.user.user_license.id);
          }
          window.location.reload();
          window.location.href = "/";
        } else if (resp.user_not_found) {
          this.setState({ emailError: resp.user_not_found });
        } else if (resp.chk_uname_or_pwd) {
          this.setState({ passwordError: resp.chk_uname_or_pwd });
        }
      })
      .catch((error) => console.log(error));

    e.preventDefault();
  };

  render() {
    return (
      <div className="comt">
        <div class="background"></div>
        <div className="inside sign-feild">
        <Row 
          
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop:"15%",
            paddingBottom: "10%",
          }}
        
        >
          <Card
            className="p-3 shadow p-3 mb-5 bg-white rounded"
            style={{ width: "21rem" }}
          >
            <Typography variant="h4" style={{ fontWeight: "bold" }} className="text-align-right">
              ورود
            </Typography>
            <form className="m-1" onSubmit={this.login}>
              <TextField
                error={this.state.emailError ? true : false}
                helperText={this.state.emailError}
                variant="outlined"
                type="email"
                fullWidth
                id="username"
                value={this.state.credentials.username}
                label="ایمیل خود را وارد کنید"
                name="username"
                onChange={this.inputChanged}
                required
                className="mt-3 mb-3"
              />

              <TextField
                error={this.state.passwordError ? true : false}
                helperText={this.state.passwordError}
                variant="outlined"
                type="password"
                fullWidth
                id="password"
                value={this.state.credentials.password}
                label="رمز خود را وارد کنید"
                name="password"
                onChange={this.inputChanged}
                required
                className="mb-3"
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                style={{
                  borderRadius: "50px",
                  background: "#0c66c2",
                  color: "#FFFFFF",
                  minWidth: "100%",
                  marginTop: "10px",
                }}
              >
                <span>ورود</span>
              </Button>
            </form>
          </Card>
        </Row>
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "-140px",
          }}
        >
          <Typography align="center" className="mt-3 text-bott">
             ثبت نام نکردید؟  
            <Link to={"/join_now"}>
              <span
                className="ml-1 text-bott"
                style={{ color: "#0c66c2", fontWeight: "bold" }}
              >
                  ثبت نام   
              </span>
            </Link>
          </Typography>
        </Row>
        </div>
        
      </div>
    );
  }
}

export default withCookies(Login);
