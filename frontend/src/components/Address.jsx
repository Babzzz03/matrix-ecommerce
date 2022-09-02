import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const Address = () => {
  const navigate = useNavigate()
  return (
    <Component>
      <ProgressBar>
        <p style={{ fontSize: "17px" }}>
          cart ........<span style={{ color: "#c245a1" }}> address </span>
          ........ payment
        </p>
      </ProgressBar>
      <FormContainer>
        <form>
          <fieldset
            style={{
              border: "1px solid #e6a3d4",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <legend style={{ fontSize: "30px ", fontWeight: "600" }}>
              Shipping Address
            </legend>

            <input type="text" placeholder="Company's Name(optional)" />
            <Row>
              <input type="text" placeholder="Name" />

              <input type="text" placeholder="Phone" />
            </Row>
            <Row>
              <input type="text" placeholder="CityDistrictTown" />

              <input type="text" placeholder="State" />
            </Row>
            <textarea placeholder="Address (Area and Street)" rows="10" />
            <SaveRow>
              <input type="checkbox"  />

             <p>save shipping address for later</p>
            </SaveRow>
            <Button>
                <button onClick={() => navigate('/paymentmethod') }  >Proceed to Checkout</button>
            </Button>
            
          </fieldset>
        </form>
      </FormContainer>
    </Component>
  );
}

export default Address

const Component = styled.div`
margin-top: 14vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProgressBar = styled.div`

`;

const FormContainer = styled.div`
width: 60vw;
margin-top: 40px;
margin-bottom: 70px;
input, textarea {
    margin: 14px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #d3d3d3;
}

`;
const Button = styled.div`
display: flex;
align-items: center;
justify-content: center;
  button {
    padding: 8px 18px;
    width: 30vw;
    margin-top: 10px;
    border-radius: 10px;
    border: 1px solid #abaaaa;
    background: pink;
  }
`;

const Row = styled.div`
display: flex;
input{
    width: 100%;
}
`;

const SaveRow = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
  }
`;