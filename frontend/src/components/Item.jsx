import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";
const Item = ({details, categ_id}) => {
    const navigate = useNavigate()
    function trauncate(string, n) {
      return string?.length > n ? string.substr(0, n - 1) + "..." : string;
    }

   const wholePrice = details.price

// const price = 4450.4010;
// const stringPrice = price.toString();

// if(stringPrice.includes('.0')) {
//   console.log('decimal existing ')
// }
// const seperate = stringPrice.split(".")[0];
// console.log(seperate);
// const [wholevalue, setWholeValue] = useState('');



// console.log(wholevalue)

  return (
    <Container onClick={() => navigate(`/itemdetails/${details.prod_id}/${categ_id}`)}>
      <ImageWrapper>
        <img src={details.image} alt="" />
      </ImageWrapper>
      <TextWrapper>
        <p style={{ fontSize: "12px" }}>{trauncate(details.descr, 110)}</p>
        <p style={{ marginTop: "0px" }}>
          <sup style={{ fontSize: "14px" }}>$</sup>
          <b style={{ fontSize: "27px" }}>
            {wholePrice.toString().split(".")[0]}
          </b>
          <sup style={{ fontSize: "14px" }}>
            {wholePrice.toString().split(".")[1] }
          </sup>{" "}
        </p>
      </TextWrapper>
    </Container>
  );
}

export default Item

const Container = styled.div`
height: 380px;
width: 320px;
background-color: #f2d9ec;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid pink;
border-radius: 10px;
cursor: pointer;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 70%;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: contain;
    width: 100%;
    height: 70%;
  }
`;

const TextWrapper = styled.div`
  width: 90%;
  height: 30%;
  background: #f2d9ec;
  display: flex;
  flex-direction: column;
`;