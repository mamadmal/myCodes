import { Avatar } from "@material-ui/core";
import { FaHashtag } from "react-icons/fa";
import "./Sidebar.css";
import { withCookies } from "react-cookie";
import { Link } from "react-router-dom";
import UserContext from "../userContext";
import React, { Component } from "react";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      profile_pic: "",
      cover_pic: "",
    };
  }

  recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <FaHashtag className="sidebar__hash" />
      <span className="p-1">{topic}</span>
    </div>
  );

  render() {
    return (
      <div className="sidebar sildeb">
        <div className="sidebar__top">
          <UserContext.Consumer>
            {(props) => {
              return <img src={props.user.cover_pic} alt="background" />;
            }}
          </UserContext.Consumer>
          <UserContext.Consumer>
            {(props) => {
              return (
                <Avatar
                  src={props.user.profile_pic}
                  className="sidebar__avatar"
                ></Avatar>
              );
            }}
          </UserContext.Consumer>
          <Link to={"/profile"}>
            <span style={{ fontWeight: "bold" }}>
              {this.props.cookies.get("auth-token").user.username}
            </span>
          </Link>
        </div>

        <div className="sidebar__stats">
          <div style={{textAlign:"center",color:"gray"}}>
          <div style={{ marginBottom: "30px" }}><span>اطلاعات بیشتر</span></div>
          </div>
          <div className="sidebar__stat">
            <p>نفر پروفایل شما را دیدند</p>
            <p className="sidebar__statNumber">۱۲۷</p>
          </div>
          <div className="sidebar__stat">
            <p>نفر پست های شما را دیدند</p>
            <p className="sidebar__statNumber">۶۳</p>
          </div>
        </div>

        <div className="sidebar__bottom">
        <p style={{ textAlign: "right" }}>اخیرا</p>
          <div style={{textAlign:"center",color:"gray"}}>
            <div style={{ marginBottom: "10px" }}><span>اطلاعات بیشتر</span></div>
          </div>
          {this.recentItem("زیست فناوری")}
          {this.recentItem("طراحی دارو")}
          {this.recentItem("امنیت غذایی")}
          <div style={{ marginBottom: "20px" }}>{this.recentItem("واکسن دام و طیور")}</div>
          {/* {this.recentItem('fintech')}
                {this.recentItem('spaceX')}
                {this.recentItem('MongoDB')} */}
          <h4 style={{ textAlign: "right" }}>هشتگ های دنبال شده</h4>
          {this.recentItem("پروبیوتیک")}
          {this.recentItem("بیوسیمیلار")}
          {this.recentItem("مهندسی بافت")}
          {this.recentItem("به‌نژادی گیاهان")}
          {/* {this.recentItem('developer')}
                {this.recentItem('business')}
                {this.recentItem('tech')} */}
        </div>
      </div>
    );
  }
}

export default withCookies(Sidebar);
