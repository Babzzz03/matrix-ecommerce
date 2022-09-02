import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = ({category}) => {

  return (
    <Component>
      <h3>
        {" "}
        <Link to={`/category/${category.categories_id}`}>
          {category.title}
        </Link>{" "}
      </h3>
      <Link to={`/category/${category.categories_id}`}>
        <img src={category.image_name} alt="" />
      </Link>
    </Component>
  );
}

export default Card


const Component = styled.div`
  height: 280px;
  width: 280px;
  background: #ffffff;
  border: 1px solid pink;
  border-radius: 10px;
  padding: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
cursor: pointer;
a{
text-decoration: none;
color: black;
}
  h3 {
    width: 100%;
    text-align: left;
  }

  img {
    height: 240px;
  }
`;