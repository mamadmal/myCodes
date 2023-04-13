import "./Register.css";
import React, { Component } from "react";
import { Container, Form, Row, Card } from "react-bootstrap";
import { Typography, Button, TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        // user credentials
        username: "",
        email: "",
        password: "",
        password2: "",
      },
      responseMsg: "",
      emailError: "",
      usernameError: "",
      passwordError: "",
    };
  }

  inputChanged = (event) => {
    // console.log(event.target.value);
    let cred = this.state.credentials;
    cred[event.target.name] = event.target.value;
    this.setState({ credentials: cred });
  };

  register = (event) => {
    fetch(`${process.env.REACT_APP_API_URL}/uapi/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.credentials),
    })
      .then((resp) => resp.json())
      .then((resp) => {
        // console.log(resp);
        if (resp.response) {
          this.setState({ responseMsg: resp.response });
        } else if (resp.email) {
          this.setState({ emailError: resp.email });
        } else if (resp.password) {
          this.setState({ passwordError: resp.password });
        }
      })
      .catch((error) => console.log(error));

    event.preventDefault();
  };

  render() {
    return (
      <body>
        <div class="background"></div>
        <div fluid className="comt-0">
        {/* add this to top div style={{ backgroundColor: "#FFFFFF" }} */}
          <a href="/">
          <Row>
            {/* <img
              className="linkedin-img-reg rounded mx-auto d-block"
              src=""
              alt=" logo"
            /> */}
          </Row></a>
          {/* <Typography align="center" variant="h5"  className="h5-top">
            به ما بپیوندید
          </Typography> */}
          <form class="form">
            <div className="forms-join">
            <Row
            >
              <Card className="card p-3" style={{ width: "20rem", boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"}}>
                <Form onSubmit={this.register} >
                  <div className="textfield">
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      type="text"
                      id="username"
                      label="نام خود را وارد کنید"
                      name="username"
                      autoComplete="username"
                      onChange={this.inputChanged}
                      className="mt-2 mb-3"
                    />

                    <TextField
                      error={this.state.emailError ? true : false}
                      helperText={this.state.emailError}
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      type="email"
                      id="email"
                      label="ایمیل خود را وارد کنید"
                      name="email"
                      autoComplete="email"
                      onChange={this.inputChanged}
                      className="mt-2 mb-3"
                    />
                    <TextField
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="رمز عبور خود را وارد کنید"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={this.inputChanged}
                      className="mt-2 mb-3"
                    />
                    <TextField
                      error={this.state.passwordError ? true : false}
                      helperText={this.state.passwordError}
                      size="small"
                      variant="outlined"
                      required
                      fullWidth
                      name="password2"
                      label="رمز عبور خود را دوباره وارد کنید"
                      type="password"
                      id="password2"
                      autoComplete="current-password"
                      onChange={this.inputChanged}
                    />
                  </div>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{
                      borderRadius: "50px",
                      background: "#0c66c2",
                      color: "#FFFFFF",
                      fontSize: "18px",
                      minWidth: "100%",
                      margin: "10px 0",
                    }}
                  >
                    ثبت نام
                  </Button>
                  {/* <span className="hr-sect" style={{ color: "#000" }}>
                    or
                  </span> */}
                  {/* <Button
                    variant="contained"
                    style={{
                      borderRadius: "50px",
                      background: "#FFFFFF",
                      color: "#0c66c2",
                      minWidth: "100%",
                      fontWeight: "bold",
                      fontSize: "17px",
                    }}
                  >
                    <img src={logo} className="pr-3" alt="google icon" />
                    Join with Google
                  </Button> */}
                </Form>
                <Typography align="center" variant="subtitle1" className="mt-3">
                  قبلا ثبت نام کردید؟{" "}
                  <Link to={"/login"}>
                    <span
                      className="ml-1"
                      style={{ color: "#0c66c2", fontWeight: "bold" }}
                    >
                      وارد شوید
                    </span>
                  </Link>
                </Typography>

              </Card>
            </Row>
            </div>
          </form>
          {this.state.responseMsg ? (
            <Redirect
              to={{
                pathname: "/login",
              }}
            />
          ) : null}
        </div>
      </body>
    );
  }
}

export default Login;
