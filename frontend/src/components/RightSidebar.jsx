import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {HiUserCircle} from "react-icons/hi";
import { useStateContext } from "../contexts/ContextProvider";
import {
  AiTwotoneSetting,
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineShoppingCart,
  AiOutlineHistory,
} from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { BsWhatsapp, BsSkype } from "react-icons/bs";
import { MdCategory, MdOutlineCancel } from "react-icons/md";
import SideBar from './SideBar';
import { CanceledError } from 'axios';
const RightSidebar = () => {
  const { categories, CategoriesApiCall, sidebarOpened, setSidebarOpened } =
    useStateContext();

  useEffect(() => {
    CategoriesApiCall()
  }, [])
  const sidebar = [
    {
      title: "General",
      icon: AiTwotoneSetting,
      children: [
        {
          title: "Home",
          icon: AiOutlineHome,
          path: "/",
        },
        {
          title: "Cart",
          icon: AiOutlineShoppingCart,
          path: "/",
        },
        {
          title: "Returns and Orders",
          icon: AiOutlineHistory,
          path: "/",
        },
        {
          title: "Contact",
          icon: AiOutlineUser,
          children: [
            { title: "Facebook", icon: FaFacebookF },
            { title: "WhatSapp", icon: BsWhatsapp },
            { title: "Skype", icon: BsSkype },
          ],
        },
      ],
    },
    {
      title: "Categories",
      icon: MdCategory,
      children: [
        {
          title: "Home",
        
          path: "/",
        },
        {
          title: "Cart",
         
          path: "/",
        },
      ],
    },
    {
      title: "Categories",
      icon: AiOutlineUser,
    },
    {
      title: "User",
      icon: AiOutlineUser,
    },
  ];
  return (
    <Container>
      <Cancel>
        <MdOutlineCancel onClick={() => setSidebarOpened(!sidebarOpened)} />
      </Cancel>
      <ContainerWrapper>
        <Header>
          <Link to="/">
            <h1>
              Ma<span style={{ color: "pink" }}>t</span>rix
            </h1>
          </Link>
          <HiUserCircle style={{ fontSize: "60px" }} />
        </Header>
        <SignInContainer>
          <h2>hello, sign in</h2>
        </SignInContainer>
        {sidebar.map((item, i) => (
          <SideBar key={i} item={item} />
        ))}
      </ContainerWrapper>
    </Container>
  );
}

export default RightSidebar

const Container = styled.div`
  float: right;
  overflow: auto;
  height: 100vh;
  width: 30%;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1000;
`;
const Cancel = styled.div`
  position: absolute;


  top: 7px;
  z-index: 1000;
  left: 2px;
  svg {
   font-size: 24px;
  }
`;

const ContainerWrapper = styled.div`
min-height: 40vh;

margin: 20px;
display: flex;
flex-direction: column;
justify-content: flex-start;
`;

const Header = styled.div`
margin-top: 0;
  display: flex;
  justify-content: space-between;
align-items: center;
  font-family: "Lobster", cursive;
  height: 50px;
  font-size: 24px;

  background-color: #ffffff;
  cursor: pointer;
  a {
    text-decoration: none;
    color: black;
  }
`;

const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3deeb;
  height: 30px;
  padding: 4px;
  border-radius: 10px;
margin: 10px 0;
  h2 {
    font-size: 18px;

    font-weight: 900;
  }
`;

