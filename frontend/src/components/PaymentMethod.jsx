import React from 'react'
import styled from 'styled-components'
import image from '../assets/Credit cards design.png'
import paypal from '../assets/paypal.png'
import mastercard from '../assets/mastercard.png'
import visa from '../assets/visa.png'
import stripe from '../assets/stripepayment.png'
const PaymentMethod = () => {
  return (
    <Component>
      <img src={image} alt="" />
      <PaymentOption>
        <PaymentWrapper>
          <h4 style={{ fontWeight: "900", fontSize: "20px" }}>
            PAYMENT OPTIONS
          </h4>

          <Line1 />
          <Line2 />
          <Option>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "400" }}>
              Paypal
            </p>
            <img src={paypal} alt="" />
          </Option>
          <Option>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "400" }}>
              Master-Card
            </p>
            <img src={mastercard} alt="" className="larger" />
          </Option>
          <Option>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "400" }}>
              Visa
            </p>
            <img src={visa} alt="" className="larger" />
          </Option>
          <Option>
            <p style={{ color: "white", fontSize: "17px", fontWeight: "400" }}>
              Stripe
            </p>
            <img src={stripe} alt="" className="largest" />
          </Option>
        </PaymentWrapper>
      </PaymentOption>
    </Component>
  );
}

export default PaymentMethod

const Component = styled.div`
  height: 100vh;

overflow: hidden;
  width: 100vw;
  position: relative;
  img {
    height: 100vh;
    object-fit: cover;
    width: 100vw;
  }
`;

const PaymentOption = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentWrapper = styled.div`
  margin-top: 40px;
  height: 77vh;
  width: 34vw;
  padding: 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  z-index: 10;
  border: 1px solid #fdddfc;
  backdrop-filter: blur(30px);
  display: flex;
  align-items: center;
  justify-content: flex-start;
 flex-direction: column;

`;
const Line1 = styled.div`
width: 50%;
height: 1.4px;
background: #d61696;
`;

const Line2 = styled.div`
  width: 30%;
  margin-top: 7px ;
  height: 1px;
  background: #da1b8e;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 90%;
  align-items: center;
  height: 40px;
  padding: 2px 10px;
  border-radius: 10px;

  img {
    height: 70px;
    width: 30px;
    object-fit: contain;
  }
  .larger {
    height: 100px;
    width: 40px;
  }
  .largest {
    height: 100px;
    width: 50px;
  }
`;
