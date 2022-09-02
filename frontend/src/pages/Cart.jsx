import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { CartItems } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Cart = () => {
 const { setIsScrolled, cartItem, setCartItem,total  } = useStateContext();

 window.onscroll = () => {
   setIsScrolled(window.pageYOffset === 0 ? false : true);
   return () => (window.onscroll = null);
 };
  const navigate = useNavigate()

  useEffect(() => {
    let cart = JSON.parse(localStorage.getItem("cartitems"));

    setCartItem(cart);
    // getTotal(cart);
  }, []);
 
  console.log(cartItem)

// const getTotal = (cartTotal) => {
 
//   let temp = cartTotal.map((item) => {
//     return parseFloat(item.price)  * parseInt(item.quantity) ;
//   });
//   let sum = temp.reduce((prev, next) => {
//       return prev + next;
//   }, 0)
//   console.log(sum);
//   console.log(temp);
//   setTotal(sum)

// }


  return (
    <Component>
      <ComponentWrapper>
        <Items>
          <ItemWrapper>
            <h4>Shoping Cart</h4>
            <Product>
              {cartItem?.map((cart, i) => (
                <CartItems cart={cart} cartItems={cartItem} key={i} />
              ))}
            </Product>
          </ItemWrapper>
        </Items>

        <CheckOutContainer>
          <Checkout>
            <CheckoutWrapper>
              <h4>Summary</h4>
              <Total>
                <p>Order total</p>{" "}
                <p>
                  ${total.toString().split(".")[0]}.
                  {total.toString().split(".")[1]?.toString().slice(0, 2)}
                </p>
              </Total>
              <Total>
                <p>Shipping fee</p> <p>$2,490</p>
              </Total>
              <Total style={{ borderTop: "1px solid #f6c2e5" }}>
                <p>Total</p> <p>$2,490</p>
              </Total>
            </CheckoutWrapper>
          </Checkout>
          <CheckOutButton>
            <button onClick={() => navigate("/address")}>Buy Now</button>
          </CheckOutButton>
        </CheckOutContainer>
      </ComponentWrapper>
    </Component>
  );
}

export default Cart

const Component = styled.div`
  margin-top: 14vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`;

const Items = styled.div`
width: 70vw;
margin: 20px;
border: 1px solid pink;
border-radius: 10px;
min-height: 40vh;
`;

const CheckOutContainer = styled.div`
display: flex;
flex-direction: column;
`;

const Checkout = styled.div`
  width: 30vw;
  margin: 20px;
  border: 1px solid pink;
  border-radius: 10px;
  min-height: 40vh;
`;

const ComponentWrapper = styled.div`
  width: 96vw;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const ItemWrapper = styled.div`


display: flex;
flex-direction: column;

margin: 30px  17px;
margin-top: 0px;
h4 {
    font-size: 37px;
   margin-top: 19px ;
   padding-bottom: 10px;
    border-bottom: 1px solid #979797;
}
`;

const Product = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  

`;

const Image = styled.div`
  width: 25%;
 
  img {
    height: 200px;
  }
`;

const Info = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
margin-left: 20px;

`;

const Price = styled.div`

text-align: right;
  width: 15%;
`; 


const Quantity = styled.div`
  display: flex;
  background-color: #ffffff;
  width: 61px;
  padding: 2px;
  border-radius: 5px;
  border: 1px solid #b9abb6;
  select {
    width: 34px;
    border: none;
}
`

const CheckoutWrapper = styled.div`
margin: 17px;
display: flex;
flex-direction: column;
align-items: flex-start;
h4 {
    margin-top: 0px;
    font-size: 19px;
  
}

`;

const Total = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

`;

const CheckOutButton = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    padding: 10px 30px;
    margin-right: 20px;
    border-radius: 20px;
    border: 1px solid #575156;
    background: #96147c;
    color: white;
  }
`;