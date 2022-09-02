import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useStateContext } from '../contexts/ContextProvider';

const CartItems = ({ cart, cartItems }) => {

   const {cartItem, setCartItem,  setTotal} = useStateContext()
   const [select, setSelect] = useState();
    

  useEffect(() => {
    setSelect(cart.quantity)
     getTotal();
  }, [])

  const handleDelete = (productId) => {
    
    let temp = cartItems.filter((items) => items.prod_id !== productId);
    localStorage.setItem("cartitems", JSON.stringify(temp));
    setCartItem(temp)
    setSelect(cart.quantity);

  
    getTotalOnDelete(temp);
     
  };


  const handleQuantity = (productId, quantity) => {
    for (let product of cartItems) {
      if(product.prod_id === productId) {
        product.quantity = quantity;
    }

  }
  localStorage.setItem('cartitems', JSON.stringify(cartItems));
setCartItem(cartItems);
 getTotal();
}

 const getTotalOnDelete = (recalculate) => {

   let temp = recalculate.map((item) => {
     return parseFloat(item.price) * parseInt(item.quantity);
   });
   let sum = temp.reduce((prev, next) => {
     return prev + next;
   }, 0);

   setTotal(sum);
 };

 const getTotal = () => {

   let temp = cartItems.map((item) => {
     return parseFloat(item.price) * parseInt(item.quantity);
   });
   let sum = temp.reduce((prev, next) => {
     return prev + next;
   }, 0);

  setTotal(sum)
 };

  return (
    <Container>
      <Image>
        <img src={cart.image} alt="" />
      </Image>
      <Info>
        <p>{cart.descr}</p>
        <p
          style={{
            fontSize: "13px",
            marginTop: "1px",
            color: "#5c5c5c",
          }}
        >
          {" "}
          in stock
        </p>
        <ControlButtons>
          <Quantity>
            <span>Qty</span>
            <select
              value={select}
              onChange={(e) => setSelect(e.target.value)}
              onClick={() => handleQuantity(cart.prod_id, select)}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </Quantity>

          <p onClick={() => handleDelete(cart.prod_id)}>Delete</p>
        </ControlButtons>
      </Info>
      <Price>
        <p>${cart.price}</p>
      </Price>
    </Container>
  );
};

export default CartItems


const Container = styled.div`
    display: flex;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #a0a0a0;
`
const Image = styled.div`
  width: 25%;

  img {
    object-fit: contain;
    height: 200px;
    width: 180px;
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
    outline: none;
  }
 
`;

const ControlButtons = styled.div`
  display: flex;
  align-items: center;

  p {
    margin-left: 20px;
padding-left: 14px;
    border-left: 1px solid #777676;
    font-size: 12px;
    color: #3a0325;
    cursor: pointer;
  }
`;