import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import ImageIcon from "@material-ui/icons/Image";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import FlipMove from "react-flip-move";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { withCookies } from "react-cookie";
import CreatePost from "./CreatePost";
import { trackPromise } from "react-promise-tracker";
// import {OverlayTrigger,Tooltip} from "react-bootstrap"

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      posts: [],
      modalPost: false,
      body: "",
      image: "",
      imageAsFile: null,
      update: false,
    };
  }

  updatePost = () => {
    // console.log("update");
    this.setState({ update: !this.state.update });
  };
  submitPost = () => {
    var form_data = new FormData();

    form_data.set("body", this.state.body);
    if (this.state.image) {
      form_data.set(
        "image",
        this.state.imageAsFile,
        this.state.imageAsFile.name
      );
    }

    fetch(`${process.env.REACT_APP_API_URL}/papi/create_post/`, {
      method: "POST",
      headers: {
        Authorization: `Token ${this.props.cookies.get("auth-token").token}`,
      },
      body: form_data,
    })
      .then((res) => res.json())
      .then((res) => {
        this.setState({ modalPost: false }, function () {
          window.location.reload();
        });
      })
      .catch((err) => console.log(err));
  };

  createPost = () => {
    this.setState({
      modalPost: true,
    });
  };

  handleBody = (e) => this.setState({ body: e.target.value });

  componentDidMount() {
    trackPromise(
      fetch(`${process.env.REACT_APP_API_URL}/papi/posts/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${this.props.cookies.get("auth-token").token}`,
        },
      })
        .then((resp) => resp.json())
        .then((res) =>
          this.setState({
            posts: res,
          })
        )
    ).catch((error) => console.log(error));
    this.updatePost();
  }
  // to display post instantly w/o refreshing after
  // creating the post.
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.posts.length !== this.state.posts.length ||
      prevState.update !== this.state.update
    ) {
      trackPromise(
        fetch(`${process.env.REACT_APP_API_URL}/papi/posts/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${
              this.props.cookies.get("auth-token").token
            }`,
          },
        })
      )
        .then((resp) => resp.json())
        .then((res) =>
          this.setState({
            posts: res,
          })
        )
        .catch((error) => console.log(error));
    }
  }

  render() {
    // console.log("tokrn ", this.props.cookies.get("auth-token"));
    return (
      <div className="feed">
        <div className="feed__inputContainer">
        <button
          style={{ width: "100%", direction: "rtl" }}
          onClick={this.createPost}
          className="feed__input"
        >
          <span style={{ color: "gray", direction: "ltr" }}>بنویسید</span>
        </button>

          {/* </div> */}
          <div className="feed__inputOptions">
            <InputOption
              click={() => {
                this.setState({ modalPost: true });
              }}
              Icon={ImageIcon}
              title="عکس"
              color="#70B5F9"
            />

            <InputOption
              Icon={SubscriptionsIcon}
              title="ویدئو"
              color="#7FC15E"
              tooltip="present"
            />
                     <InputOption
              Icon={EventNoteIcon}
              title="رویداد"
              color="#E7A33E"
              tooltip="present"
            />
                 <InputOption
              Icon={CalendarViewDayIcon}
              title="مقالات"
              color="#F5987E"
              tooltip="present"
            />
        
        
          </div>
        </div>
        <hr />

        {/* Posts */}
        <FlipMove>
          {this.state.posts.length > 0 &&
            this.state.posts.map((post) => (
              <Post key={post.id} post={post} updatePost={this.updatePost} />
            ))}
        </FlipMove>

        {this.state.modalPost ? (
          <Link to component={() => <CreatePost />} />
        ) : null}
      </div>
    );
  }
}

export default withCookies(Feed);
