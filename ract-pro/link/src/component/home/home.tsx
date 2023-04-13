import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img01 from '/images/slide/slide_01.png';
import img02 from '/images/slide/slide_02.png';
import img03 from '/images/slide/slide_03.png';


export default function home(){
    return (
        <div className="body">
            <div className="nav-bar ">
            <a href='/'><img src='./images/login-logo.svg' alt='' className='nav-img' /></a>           
            <div className="nav-bott">
                <a href="/sign_in" className="btn btn-outline-primary sin-bott">ورود</a>
                <a href="/join" className="btn btn-light join-bott">ثبت نام </a>
            </div>
            </div>
            <div className="center-pg">
                <h1 className="welcome-txt">به این سایت خوش امدید و لحظات خوب را برای شما ارزو مندیم</h1>
                <div className='slider-div'>
                    <AliceCarousel autoPlay autoPlayInterval={3000} disableButtonsControls >
                    <img src={img01} alt="" className='sliderimg'/>
                    <img src={img02} alt="" className='sliderimg'/>
                    <img src={img03} alt="" className='sliderimg'/>
                     </AliceCarousel> 
                </div>
            </div>
            <div className='footer'>

            </div>
        </div>
    )
}
