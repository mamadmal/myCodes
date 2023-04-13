import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import './Home.css';
import './animate.css'



class Home extends Component {
  render() {
    return (
      <Container>
        <Nav className="navbar">
          <a href="/">
          <div class="wrapper">
        <div class="loader">
          <div class="wave top-wave">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="wave bottom-wave">
          <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
          </a>
          <div>
            <Link to={"/join_now"} style={{ textDecoration: 'none' }}>
              <Join>ثبت نام </Join>
            </Link>
            <Link to={"/login"} style={{ textDecoration: 'none' }}>
              <SignIn>ورود</SignIn>
            </Link>
          </div>
        </Nav>
        <Section>

          <Hero className="container">
            <img src="./images/login-hero.svg" alt="" className="img-img" />
            <h1 className="h1">به پلتفرم همرسانی تخصصی بیوتکنولوژی خوش آمدید</h1>
            
          </Hero> 
        </Section>

        <section className="sec-view"> 
          
          <div className="div-btn">
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زیست فناوری پزشکی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">درمان سرطان</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">به نژادی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">دارو</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">واکسن</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">آنتی بیوتیک</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">درمان دیابت</span></a>
            
          </div>
          <h1 className="you-may-like">شاید دوست داشته باشید</h1>
        </section>

        <section className="third-view"> 
        <h1 className="you-may-like">به دنبال همکار باشید</h1>
          <div className="div-btn">
           
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زیست فناوری پزشکی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زیست فناوری کشاورزی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زیست فناوری صنعتی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زیست فناوری میکروبی</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">مهندسی پروتئین‌</span></a>
            <a href="/#"><span className="btn btn-outline-secondary main-div-btn ">زخم پوش</span></a>
          </div>
        </section>
        
        <section className="forth-pic-div">
          <div className="left-side">
            <span className="span-in-forth"><h1 className="h1-in-forth">این پلتفرم به چه منظور ایجاد شده است؟</h1>
            از زندگی حرفه ای خود نهایت استفاده را ببرید
            همکاران خود را به راحتی پیدا کنید و با آن ها کار کنید
            </span>
          </div>
          <div className="right-side"></div>
        </section>


      </Container>
      
    );
  }
}

const Container = styled.div`
  padding: 0px;
  font-family: 'El Messiri', sans-serif;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`

  align-content: start;
 
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;



  align-items: center;
  margin: auto;
  @media (max-width: 768px) {
    margin: auto;
    min-height: 0px;
  }
`;

const Hero = styled.div`

  h1 {
    padding-bottom: 0;
    width: 55%;
    font-size: 56px;
    font-weight: 200;
    line-height: 70px;
    @media (max-width: 768px) {
      text-align: right;
      font-size: 20px;
      width: 100%;
      line-height: 2;
      
    }
  }

`;

export default Home;

