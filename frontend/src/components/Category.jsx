import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
import { useStateContext } from '../contexts/ContextProvider';
import Item from './Item';
import Ratings from './Ratings';

const Category = () => {
    const {
      categories,
      CategoriesApiCall,
      singleCategoryDetails,
      setSingleCategoryDetails,
      setIsScrolled,
      singleCategory,
    } = useStateContext();
      const {id }=  useParams()
useEffect(() => { 
  window.scrollTo(0, 0);
  setSingleCategoryDetails([])
  CategoriesApiCall();
  singleCategory(id);
}, []);


   

 
      window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
      };

    
  return (
    <Component>
      <FilterSideBar>
        <Filter>
          <CategoriesFilter>
            <h3>Categories</h3>

            {categories.map((category, i) => (
              <p key={i}>{category.title}</p>
            ))}
          </CategoriesFilter>
          <PriceFilter>
            <h3>Price</h3>
            <p>bag</p>
            <p>shoe</p>
          </PriceFilter>
          <RatingsFilter>
            <h3>Ratings</h3>
            <div className="rating">
              <Ratings rate={5} size={18} />
            </div>
            <div className="rating">
              <Ratings rate={4} size={18} />
            </div>
            <div className="rating">
              <Ratings rate={3} size={18} />
            </div>
          </RatingsFilter>
        </Filter>
      </FilterSideBar>
      <Items>
        <ItemWrapper>
          {singleCategoryDetails.map((details, i) => (
            <Item
              key={details.categories_id + i}
              details={details}
              categ_id={id}
            />
          ))}
        </ItemWrapper>
      </Items>
    </Component>
  );
}

export default Category

const Component = styled.div`
  margin-top: 10vh;
  width: 100%;
  display: flex;
`;

const FilterSideBar = styled.div`
  width: 20%;
border-right: 1px solid black;
 position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Items = styled.div`
  min-height: 100vh;
  display: flex;
  margin-top: 2vh;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

const ItemWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;
`;

const CategoriesFilter = styled.div`
  width: 94%;
  h3 {
    text-align: left;
  }
  .rating {
    margin-left: 40px;
    width: 100%;
  }
`;

const RatingsFilter = styled.div`
  width: 80%;
  p {
    margin-left: 40px;
  }
`;

const PriceFilter = styled.div`
  width: 80%;
  p {
    margin-left: 40px;
  }
`;

const Filter = styled.div`
  position: absolute;
  width: 70%;
  top: 20px;
`;