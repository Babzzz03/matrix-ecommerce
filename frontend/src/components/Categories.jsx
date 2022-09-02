import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';
import Card from './Card'

const Categories = () => {
   const { categories } = useStateContext();
  return (
    <Component>
      <TextCategories>
        {" "}
        <h1>CATEGORIES</h1>{" "}
      </TextCategories>
      <Category>
        <CardWrapper>
          {categories.map((mappedcategory)=> (
             <Card category={mappedcategory} key={mappedcategory.categories_id}/>
          ))}
         
        
        </CardWrapper>
      </Category>
    </Component>
  );
}

export default Categories


const Component = styled.div`
display: flex;
min-height: 100vh;
background: #f3e4e4;
width: 100%;

`; 

const TextCategories = styled.div`
  width: 17%;

  border-right: 2px solid pink;
  position: relative;
  h1 {
    position: absolute;
   opacity: 0.1;
    top: 17rem;
    left: -18%;
    font-size: 70px;
    transform: rotate(-90deg);
  }
`;
const Category = styled.div`
width: 83%;
display: flex;
align-items: center;
justify-content: center;
margin-top: 10vh;

`;


const CardWrapper = styled.div`
  display: grid;
  
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;