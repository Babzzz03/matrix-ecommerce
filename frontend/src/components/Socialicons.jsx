import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Facebook,
  Github,
  Twitter,
  YouTube,
  WhatSapp,
  Skype,
} from "./AllSvgs";



const Icons = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;

  bottom: 0;
  left: 2rem;

  z-index: 3;
  & > *:not(:last-child) {
    margin: 0.3rem 0;
  }

  @media (max-width: 40em) {
    left: 1rem;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 7rem;
  background-color: #000000
`;

const Socialicons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://wa.me/message/43KEVC47D6HVM1" }}
        >
          <WhatSapp
            width={25}
            className="reduced__social__icons"
            height={25}
            fill= 'black'
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "" }}
        >
          <Skype
            width={25}
            className="reduced__social__icons"
            height={25}
            fill={'black'}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://www.facebook.com/ola.babs.7121" }}
        >
          <Facebook
            width={25}
            className="reduced__social__icons"
            height={25}
            fill={'black'}
          />
        </NavLink>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/Babzzz03" }}
        >
          <Github
            width={25}
            className="reduced__social__icons"
            height={25}
            fill={'black'}
          />
        </NavLink>
      </motion.div>
      <Line
        color={'black'}
        initial={{
          height: 0,
        }}
        animate={{
          height: "7rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default Socialicons;
