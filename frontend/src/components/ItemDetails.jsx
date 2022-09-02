import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import ReactImageMagnify from "react-image-magnify";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../contexts/ContextProvider';
import Ratings from './Ratings';
import { BsArrowLeft} from 'react-icons/bs'
const ItemDetails = () => {
    const { id, categ_id } = useParams();
console.log(categ_id);
     const { itemDetail, setItemDetail, singleCategoryDetails, singleCategory } =
       useStateContext();
    const [previousItem, setNewItem] = useState('')

    const [cart, setCart] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    setItemDetail('')
singleItem(id)
 singleCategory(categ_id);
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
//  const items = JSON.parse(localStorage.getItem("cartitems"));

// handleCartItems();

//  console.log(items);
// setTimeout(() => {
//   setCart(items)
//  console.log({ localStoragecartueState: cart });
// }, 2000);

// console.log({localStoragecart: cart})
  }, [])
  

    const singleItem = (id) => {
      axios
        .get(`http://localhost:5000/item/${id}`)
        .then((res) => setItemDetail(res.data[0]));
    };

  const [alert, setAlert] = useState(false)
  const handleAlert = () => {
setAlert(true);
setTimeout(() => {
  setAlert(false)
}, 3000);

  }


const handleCartItems = (productId) => {
  let cart = JSON.parse(localStorage.getItem("cartitems"));
    

  let product =  singleCategoryDetails.find(function(product){
    return product.prod_id === productId;
  });

  if(cart.length === 0) {
cart.push(product);
  }else {
  let res = cart.find((element) => element.prod_id === productId);
  if (res === undefined){
    cart.push(product);
  }
  }


localStorage.setItem("cartitems", JSON.stringify(cart));
navigate("/cart");
}




  return (
    <Component>
      <Back onClick={() => navigate(-1)}>
        <BsArrowLeft style={{ marginRight: 7, fontSize: "14px" }} />
        <p style={{ fontSize: "11px" }}> back to previous category</p>
      </Back>
      <Image>
        <ImageWrapper>
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `${itemDetail?.image}`,
              },
              largeImage: {
                src: `${itemDetail?.image}`,
                width: 800,
                height: 800,
              },

              isHintEnabled: true,
              shouldHideHintAfterFirstActivation: false,
              shouldUsePositiveSpaceLens: true,
            }}
          />
        </ImageWrapper>
      </Image>
      <Description>
        <h3>{itemDetail?.descr}</h3>
        <Rating>
          <p>
            <Ratings rate={5} size={17} margin={3} />{" "}
          </p>{" "}
          <p style={{ color: "#491441" }}> 4.8 / 5 star ratings</p>{" "}
        </Rating>
        <p>
          {" "}
          <span style={{ fontSize: "17px" }}> Price</span>: ${itemDetail?.price}{" "}
        </p>
      </Description>
      <Order>
        <CartContainer>
          <CartWrapper>
            <p style={{ marginTop: "0px" }}>
              <sup style={{ fontSize: "14px" }}>$</sup>
              <b style={{ fontSize: "27px" }}>
                {itemDetail.price?.toString().split(".")[0]}
              </b>
              <sup style={{ fontSize: "14px" }}>
                {itemDetail.price?.toString().split(".")[1]}
              </sup>{" "}
            </p>
            <p style={{ marginTop: "0px" }}>
              No import fees Deposit &<br /> ${33 + 10} shipping to Location{" "}
            </p>
            <p style={{ marginTop: "0px" }}>
              Delivery Tuesday <br /> September 5.{" "}
            </p>
            <p style={{ marginTop: "0px" }}>
              Or fastest delivery Monday, September 4
            </p>

            <h4 style={{ marginTop: "0px" }}>In Stock</h4>
            <Quantity>
              <span>Qty</span>
              <select>
                <option>1</option>
              </select>
            </Quantity>

            <button
              //  onClick={() => navigate("/cart")}
              onClick={() => handleCartItems(itemDetail.prod_id)}
              style={{
                marginTop: "14px",
                background: "pink",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>

            <button>Buy Now</button>
          </CartWrapper>
        </CartContainer>
      </Order>
      <Blur></Blur>
    </Component>
  );
}

export default ItemDetails


const Component = styled.div`

margin-top: 14vh;
margin-bottom: 0;
display: flex;
flex-wrap: wrap;
position: relative;
`;

const Image = styled.div`
  width: 40vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain ;

  }
`;

const ImageWrapper = styled.div`
  width: 25vw;

margin-top: 3vh;
`;
const Description = styled.div`
  width: 38vw;
 
  display: flex;
  flex-direction: column;

  h3 {
    text-transform: capitalize;
    letter-spacing: 1px;
    font-size: 21px;
  line-height: 27px;
  font-weight: 400
  }
`;

const Order = styled.div`
  width: 20vw;
 

`;

const Rating = styled.div`
  display: flex;
  border-bottom: 1px solid #e1e1e1;
`;

const CartContainer = styled.div`
  margin: 10px;

  border: 1px solid #e5e5e5;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(30px);
`;

const CartWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  button {
    padding: 5px 0;
    margin-bottom: 4px;
    border-radius: 40px;
    border: 1px solid pink;
    background: transparent;
  }
  select {
    width: 34px;
    border: none;
    outline: none;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const Blur = styled.div`
  position: absolute;
  width: 20rem;
  height: 14rem;
  border-radius: 50%;
  background: #ffd2fe;
z-index: -1;
  filter: blur(84px);
  top: 20px;
  right: 1%;
`;

const Quantity = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 61px;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #b9abb6;
`;


const Back = styled.div`
  position: absolute;
  z-index: 4;
  top: 0;
  left: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;