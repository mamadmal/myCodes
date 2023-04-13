import "./Widgets.css";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

import React, { Component } from "react";

class Widgets extends Component {
  newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon className="mr-1" />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  render() {
    return (
      <div className="widgets">
        <div className="widgets__header">
          <h2>اخبار و تازه ها</h2>
          <InfoOutlinedIcon />
        </div>
        <div style={{textAlign:"center",color:"gray"}}>
          <div style={{ marginBottom: "20px" }}><span>اطلاعات بیشتر</span></div>
        </div>
        {this.newsArticle(
          "رونمایی از نانوکیت‌های تشخیص آلودگی های نیترات و نیتریت و آمونیاک در پژوهشگاه بیوتکنولوژی کشاورزی",
          "خبر برتر - ۴۶۹۲ بازدید"
        )}
        {this.newsArticle(
          "ستاد توسعه زیست فناوری برنامه‌ای در زمینه «زیست فناوری صنعتی» در حوزه‌های سوخت زیستی، آنزیم‌ها و پروتئین‌ها تدوین کرده است",
          "خبر برتر - ۳۱۲۶ بازدید"
        )}
        {this.newsArticle(
          "رئیس پژوهشگاه ملی مهندسی ژنتیک و زیست فناوری از جذب نخبگان ایرانی خارج از کشور در این پژوهشگاه خبر داد",
          "خبر برتر - ۴۲۳۷ بازدید"
        )}
        <img
          src="./images/Screenshot (322).jpg"
          alt="ad"
        />
        <img
          src="./images/Screenshot (331).jpg"
          alt="ad"
        />
        <img
          src="./images/Screenshot (332).jpg"
        />
        <img
          src="./images/people-celebrating-online-.jpg"
          alt="ad"
        />
      </div>
    );
  }
}

export default Widgets;
