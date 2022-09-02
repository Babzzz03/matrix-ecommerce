import React, { startTransition } from 'react'
import styled from 'styled-components'
import { useEffect,  useState } from "react";
import backgroundStripe from '../assets/stripe.png'
import { Categories, RightSidebar } from '../components';
import Socialicons from '../components/Socialicons';
import {MdShoppingCart} from 'react-icons/md';
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useStateContext } from "../contexts/ContextProvider";
import { MdOutlineStarPurple500 } from "react-icons/md";
import axios from "axios";
import Ratings from '../components/Ratings';
const values = [
  { name: "first the potentially values" },
  { name: "second the potentially values" },
  { name: "third the potentially values" },
  { name: "fourth the potentially values" },
];
const Home = () => {
  useEffect(() => {
   CategoriesApiCall()
  }, [])

 const CategoriesApiCall = async () => {
   await axios.get('http://localhost:5000').then((response) => {
    setCategories(response.data);
   })
  }
  
  const { setCategories, setIsScrolled}= useStateContext();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
      const slideLenght = values.length;
  const [angleRotate, setAngleRotate] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(0);
     let slideInterval;
     let autoScroll = true;

  const HandleRotate = () => {
setAngleRotate( angleRotate + 90);
setCurrentSlide(currentSlide === slideLenght - 1 ? 0 : currentSlide + 1);

  }
  const HandleBackwards = () => {
    setAngleRotate(angleRotate - 90);
    setCurrentSlide(currentSlide === 0 ? slideLenght - 1 : currentSlide - 1);
  }
   function auto() {
  slideInterval = setInterval(HandleRotate, 7000);
   }
     useEffect(() => {
       if (autoScroll) {
         auto()
       }
       return () => clearInterval(slideInterval);
     }, [currentSlide]);




  return (
    <HomeWrapper>
      <Component>
        <LeftHero>
          <Transformation>
            <Rotation style={{ transform: `rotate(${angleRotate}deg)` }}>
              <img
                src=" https://m.media-amazon.com/images/I/91Ksi-F7dvL._AC_UL480_FMwebp_QL65_.jpg"
                alt="image1"
                style={{ top: -100, left: 0, transform: "rotate(-180deg)" }}
              />

              <img
                src="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_UL480_FMwebp_QL65_.jpg"
                alt="image2"
                style={{ top: 0, right: -110, transform: "rotate(-90deg)" }}
              />
              <img
                src="https://m.media-amazon.com/images/I/61iziCMuW1L._AC_UL480_FMwebp_QL65_.jpg"
                alt="image3"
                style={{ bottom: 0, left: -100, transform: "rotate(-270deg)" }}
              />
              <img
                src="https://m.media-amazon.com/images/I/81xdLjyV5+L._AC_UY327_FMwebp_QL65_.jpg"
                alt="image4"
                style={{ bottom: -100, right: 0 }}
              />
            </Rotation>
          </Transformation>
        </LeftHero>
        <RightHero>
          <InfoPosition>
            <InfoWrapper>
              <h4 style={{ fontWeight: "400", fontSize: "14px" }}>
                OneOdio Wired Over Ear Headphones Studio Monitor & Mixing DJ
                Stereo Headsets with 50mm Neodymium Drivers and 1/4 to 3.5mm
                Audio Jack for AMP Computer Recording Phone Piano Guitar Laptop
                - Black
              </h4>
              <div className="stars">
                <Ratings rate={5} size={20} margin={5} />
              </div>
              <p style={{ marginTop: "0px" }}>
                <sup style={{ fontSize: "14px" }}>$</sup>
                <b style={{ fontSize: "27px" }}>121</b>
                <sup style={{ fontSize: "14px" }}>99</sup>{" "}
              </p>
              <div className="buttons">
                <button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {" "}
                  <MdShoppingCart style={{ fontSize: 15 }} /> Add to cart
                </button>{" "}
                <button style={{ background: "transparent" }}>
                  Explore More
                </button>
              </div>
            </InfoWrapper>
          </InfoPosition>
        </RightHero>
        {/* <BackgroundImage>
          <img src={backgroundStripe} alt="" />
        </BackgroundImage> */}

        <Blur></Blur>
        <Blur2></Blur2>
        <Blur3></Blur3>
        <Blur4></Blur4>

        <Socialicons />

        <BackgroundName>
          <h1>HEADPHONE</h1>
        </BackgroundName>
        <BsArrowRightShort
          style={{
            position: "absolute",
            top: "50%",
            right: "1px",
            fontSize: "44px",
            cursor: "pointer",
            zIndex: 444,
          }}
          onClick={HandleRotate}
        />
        <BsArrowLeftShort
          style={{
            position: "absolute",
            top: "50%",
            left: "1px",
            fontSize: "44px",
            cursor: "pointer",
            zIndex: 444,
          }}
          onClick={HandleBackwards}
        />
      </Component>
      <Line></Line>
      <Categories />
    </HomeWrapper>
  );
}

export default Home




const HomeWrapper = styled.div`
display: flex,
flex-direction: column,

`;


const Component = styled.div`
  background-color: #ffffff;
  display: flex;
  height: 100vh;
  position: relative;

`;

const LeftHero = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
`;


const RightHero = styled.div`
  width: 100%;
  width: 1900px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;


const Transformation = styled.div`
  height: 1000px;
  width: 1000px;
  transform: translate(-50%, -50%);
`;

const Rotation = styled.div`
  height: 1000px;
  width: 1000px;

  position: relative;
  transition: all 0.9s ease-in;
  img {
    width: 290px;
    position: absolute;
   
  }
`;

const InfoPosition = styled.div`
  position: absolute;

  width: 600px;
  border-radius: 10px;
  right: 40px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 10;
  border: 1px solid #f7d8ee;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const InfoWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 10px;
  }
  button {

    padding: 10px 17px;
margin-right: 19px ;
    border-radius: 40px;
    background-color: #edceef;
    border: 1px solid #936a95;
  }
  .buttons {
    display: flex;
  }
`;

const BackgroundImage = styled.div`
  img {
   // height: 700px;
   height: 300px;
    position: absolute;
   
   // top: -120px;
   top: -70px;
    right: 0;
  }
`;
const Blur = styled.div`
  position: absolute;
  width: 20rem;
  height: 14rem;
  border-radius: 50%;
  //background: #fdddfc;
  background: #f9b2f7;
  filter: blur(54px);
  top: 20px;
  right: 10%;
  z-index: 1;
`;
const Blur2 = styled.div`
  position: absolute;
  width: 20rem;
  height: 14rem;
  border-radius: 50%;
  //background: #f0ddfd;
  background: #ce95f4;

  filter: blur(54px);
  top: 150px;
  right: 17%;
  z-index: 3;
`;

const Blur3 = styled.div`
  position: absolute;
  width: 24rem;
  height: 14rem;
  border-radius: 50%;
  background: #efe9ac;

  filter: blur(44px);
  top: 140px;
  right: 4%;
  z-index: 2;
`;
const Blur4 = styled.div`
  position: absolute;
  width: 59rem;
  height: 10rem;
  border-radius: 50%;
  background: #fdd8de;

  filter: blur(94px);
bottom: 0;
  right: 0%;
  z-index: 1;
`;


const BackgroundName = styled.div`
position: absolute;
bottom: -71px;
left: 30%;
h1 {
  font-size: 120px;
  font-weight: 1000;

}
opacity: 0.1;

z-index: 4;

`;

const Line = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
height: 1px;
background: #f1f0f0;
`;