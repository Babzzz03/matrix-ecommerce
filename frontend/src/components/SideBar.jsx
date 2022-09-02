import React, { useState } from 'react'
import styled from 'styled-components';
import { AiOutlineDown } from "react-icons/ai";

const SideBar = ({item}) => {
      const [open, setOpen] = useState(false);
   
if (item.children) {
  return (
    <SideBarItems>
      <SideBarTitle>
        <span>
          {item.icon && <item.icon />}
          {item.title}
        </span>
        <AiOutlineDown
          style={{
            cursor: "pointer",
            transition: "transform .3s",
            transform: `${open ? " rotate(180deg) " : " rotate(0deg) "}`,
          }}
          className="toggler-btn"
          onClick={() => setOpen(!open)}
        />
      </SideBarTitle>
      <SidebarContent
        style={{ height: `${open ? "auto" : "0px"}` }}
      >{item.children.map((child, index)=> <SideBar key={index} item={child} />)}</SidebarContent>
    </SideBarItems>
  );
} else 
 {
   return (
     <SideBarItems>
       <SideBarTitle>
         <a href={item.path || "#"}>
           <span>
             {item.icon && <item.icon />} {item.title}
           </span>
         </a>
       </SideBarTitle>
     </SideBarItems>
   );
 }
}

export default SideBar


const SideBarItems = styled.div`
  padding: 0.74em 1em;

  color: #080808;

  transition: background-color 0.2s;
  display: block;
  border-radius: 4.9px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    svg {
      display: inline-block;
      width: 1.5em;
    
    }
  }
`;

const SideBarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.2em;
  align-items: center;
  svg {
    display: inline-block;
    width: 1.5em;
  }
`;

const SidebarContent = styled.div`
  padding-top: 0.24em;

  overflow: hidden;
`;



//    item.children ? (
//      <SideBarItems key={i}>
//        <SideBarTitle>
//          <span>
//            {item.icon && <item.icon />}
//            {item.title}
//          </span>
//          <AiOutlineDown
//            style={{
//              cursor: "pointer",
//              transition: "transform .3s",
//              transform: `${
//                open ? " rotate(180deg) " : " rotate(0deg) "
//              }`,
//            }}
//            className="toggler-btn"
//            onClick={() => setOpen(!open)}
//          />
//        </SideBarTitle>
//        <SidebarContent style={{ height: `${open ? "auto" : "0px"}` }}>
//          {item.children.map((child, i) =>  item.children ? (
//      <SideBarItems key={i}>
//        <SideBarTitle>
//          <span>
//            {item.icon && <item.icon />}
//            {item.title}
//          </span>
//          <AiOutlineDown
//            style={{
//              cursor: "pointer",
//              transition: "transform .3s",
//              transform: `${
//                open ? " rotate(180deg) " : " rotate(0deg) "
//              }`,
//            }}
//            className="toggler-btn"
//            onClick={() => setOpen(!open)}
//          />
//        </SideBarTitle>
//        <SidebarContent style={{ height: `${open ? "auto" : "0px"}` }}>
//          {item.children}
//        </SidebarContent>
//      </SideBarItems>
//    ) : (
//      <SideBarItems key={i}>
//        <a href={item.path || "#"}>
//          <span>
//            {item.icon && <item.icon />} {item.title}
//          </span>
//        </a>
//      </SideBarItems>
//    ) )}
//        </SidebarContent>
//      </SideBarItems>
//    ) : (
//      <SideBarItems key={i}>
//        <a href={item.path || "#"}>
//          <span>
//            {item.icon && <item.icon />} {item.title}
//          </span>
//        </a>
//      </SideBarItems>
//    )
//  ) }
