import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'
import image from "../assets/gradiant.jpg";


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  return (
    <Component
      style={{
        background: `url(${image}) no-repeat fixed center`,
        backgroundSize: "cover",
      }}
    >
      <Form>
        <h1>Sign In</h1>
        <p className="tag">E-mail</p>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="tag">Password</p>
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>
          <button >Sign In</button>
        </Button>
        <p className="create">
          Dont have an accout yet ?{" "}
          <Link className="Link" to="/signup">
            Create Account
          </Link>{" "}
        </p>
      </Form>
    </Component>
  );
}

export default Login

const Component = styled.div`

background: url('../assets/gradiant.jpg');
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
`;


const Form = styled.div`
  width: 30vw;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 40px;
  backdrop-filter: blur(20px);
  display: flex;
  flex-direction: column;
  height: 80vh;
  border-radius: 10px;
  h1 {
    padding: 10px;
    padding-bottom: 17px;
  }
  input {
    width: 80%;

    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid black;
    background-color: rgba(255, 255, 255, 0.4);
    border-radius: 7px;
    padding: 10px;
    outline: none;
    margin: 10px auto;
    font-size: 14px;
  }
  .tag {
    margin-top: 20px;
    margin-left: 14px;
  }
  button {
    margin-top: 20px;
    padding: 10px 4px;
    width: 14rem;
    outline: none;
    border-radius: 10px;
    background-color: #b180de;
    border: 1px solid black;
  }
  .create {
    margin: 30px auto;
  }

  .Link {
    text-decoration: none;
    color: #2d1941;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;