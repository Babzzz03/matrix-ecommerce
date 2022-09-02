import axios from "axios";
import React, { createContext, useContext, useState } from "react";
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpened, setSidebarOpened] = useState(false)
  const [categories, setCategories] = useState([]);
  const [singleCategoryDetails, setSingleCategoryDetails] = useState([]);
  const [itemDetail, setItemDetail] = useState({});
  const [cartItem, setCartItem] = useState([]);
   const [total, setTotal] = useState("");
  const CategoriesApiCall = async () => {
    await axios.get("http://localhost:5000").then((response) => {
      setCategories(response.data);
    });
  };

  const singleCategory = (id) => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((res) => setSingleCategoryDetails(res.data));
  };
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider
      value={{
        isScrolled,
        setIsScrolled,
        categories,
        setCategories,
        singleCategoryDetails,
        setSingleCategoryDetails,
        CategoriesApiCall,
        itemDetail,
        setItemDetail,
        singleCategory,
        cartItem,
        setCartItem,
        sidebarOpened,
        setSidebarOpened,
        total,
        setTotal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
