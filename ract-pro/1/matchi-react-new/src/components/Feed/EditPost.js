import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { withCookies } from "react-cookie";
import InsertPhotoIcon from "@material-ui/icons/InsertPhoto";
import "./CreatePost.css";
import { Avatar } from "@material-ui/core";
import { AiFillCloseCircle } from "react-icons/ai";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalPost: true,
      body: this.props.post.body,
      image: this.props.post.image,
      imageAsFile: this.props.post.imageAsFile,
    };
  }

  removeImage = () => {
    this.setState({
      image: "",
      imageAsFile: null,
    });
  };

  handleBody = (e) => {
    this.setState({ body: e.target.value })
  }

  submitPost = () => {
    var form_data = new FormData();

    form_data.set("body", this.state.body);
    form_data.set("user", this.props.cookies.get("auth-token").user.id);

    if (this.state.imageAsFile) {
      form_data.set(
        "image",
        this.state.imageAsFile,
        this.state.imageAsFile.name
      );
    }

    // console.log(this.props.cookies.get("auth-token").token);
    fetch(
      `${process.env.REACT_APP_API_URL}/papi/posts/${this.props.post.id}/`,
      {
        method: "PUT",
        headers: {
          Authorization: `Token ${this.props.cookies.get("auth-token").token}`,
        },
        body: form_data,
      }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({ modalPost: false }, function () {
          window.location.reload();
          this.props.closemodalPost(false);
        });

        // console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div>
        <Modal
          style={{
            height: "700px",
          }}
          scrollable={true}
          show={this.state.modalPost}
          size="md"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            closeButton
            autoFocus
            onClick={() =>
              this.setState({ modalPost: false }, function () {
                this.props.closemodalPost(false);
              })
            }
          >
            <Modal.Title
              style={{
                fontSize: "1.2rem",
              }}
              id="contained-modal-title-vcenter"
            >
              تغییر پست
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                <div className="post__header">
                  {this.props.cookies.get("auth-token").user.profile_pic ? (
                    <Avatar
                      src={
                        this.props.cookies.get("auth-token").user.profile_pic
                      }
                      alt="Profile"
                    />
                  ) : (
                    <Avatar
                      className="post__image"
                      src="/images/user.svg"
                      alt="Profile"
                    />
                  )}
                  <span className="ml-2" style={{ fontWeight: "bold" }}>
                    {this.props.cookies.get("auth-token").user.username}
                  </span>
                </div>
              </Form.Label>
              <Form.Control
                value={this.state.body}
                style={{ border: "none" }}
                placeholder="متن پست خود را بنویسید"
                onChange={this.handleBody}
                as="textarea"
                rows={3}
              />
            </Form.Group>

            {this.state.image ? (
              <React.Fragment>
                <div class="img_wrp">
                  <img
                    className="post__image"
                    style={{ borderRadius: "10px" }}
                    src={this.state.image}
                    alt=""
                  />
                  <AiFillCloseCircle
                    className="close__image"
                    onClick={this.removeImage}
                  />
                  {/* <Icon  /> */}
                </div>
              </React.Fragment>
            ) : null}
          </Modal.Body>
          <Modal.Footer>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              onChange={(e) =>
                this.setState({
                  image: URL.createObjectURL(e.target.files[0]),
                  imageAsFile: e.target.files[0],
                })
              }
            />
            <label className="mr-auto" htmlFor="file">
              <InsertPhotoIcon style={{ color: "gray" }} />
            </label>
            <Button
              style={post_button}
              disabled={this.state.body.length < 1}
              type="submit"
              onClick={this.submitPost}
            >
              ارسال
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const post_button = {
  paddingLeft: "20px",
  paddingRight: "20px",
  marginTop: "10px",
  marginLeft: "10px",
  fontWeight: "bold",
  borderRadius: "50px",
  display: "flex",
  background: "#0c66c2",
  color: "white",
  border: "solid 1px #0c66c2",
};

export default withCookies(EditPost);
