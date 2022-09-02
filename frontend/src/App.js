import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import { Category, CreateAccount, Header, Login, PaymentMethod, RightSidebar } from "./components";
import Address from "./components/Address";
import ItemDetails from "./components/ItemDetails";
import Orders from "./components/Orders";
import { useStateContext } from "./contexts/ContextProvider";
import GlobalStyle from "./globalStyle";
import { Home } from "./pages";
import Cart from "./pages/Cart";
const App = () => {
   const { isScrolled, sidebarOpened } = useStateContext();
  return (
    <>
      <GlobalStyle sidebarOpened={sidebarOpened} />
      <Container className="App ">
        <BrowserRouter>
          <div style={{ marginRight: "0vw" }}>
            <div
              className="header_background"
              style={{
                position: "fixed",
                top: "0",
                width: "100vw",
                zIndex: 999,
                background: `${isScrolled ? "rgba(255,255,255,0.5)" : ""}`,
                backdropFilter: `${isScrolled ? "blur(10px)" : "blur(0px)"}`,
                boxShadow: `${
                  isScrolled ? "0px 4px 7px 0px rgba(0,0,0,0.2)" : ""
                }`,

                height: "10vh",
                transition: "all 0.4s",
              }}
            >
              <Header />
            </div>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:id" element={<Category />} />
              <Route
                path="/itemdetails/:id/:categ_id"
                element={<ItemDetails />}
              />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />

              <Route path="/signup" element={<CreateAccount />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/address" element={<Address />} />
              <Route path="/paymentmethod" element={<PaymentMethod />} />
            </Routes>
          </div>
          <div
            style={{
              position: "fixed",
              top: "0",
              width: `${sidebarOpened ? "100vw" : 0} `,
              transition: "all 0.5s",
              zIndex: "999",
              right: "0",

              background: "rgba(0, 0, 0, 0.7)",
            }}
          >
            {/* <div
              style={{
                position: "absolute",
                top: "10px",
                right: "31vw",
                background: "red",
                width: `${sidebarOpened ? "100vw" : 0} `,
              }}
            >
              <p style={{width: `${sidebarOpened ? "100vw" : 0}`}} >me</p>
            </div> */}

            <RightSidebar />
          </div>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`

`;
