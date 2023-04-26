import React from "react";
import Button from "../UI/Button";
import styled from "styled-components";

export const Header = ({ openExpenseHandler, openUserHandler,logOutHandler, isLogin }) => {
  return (
    <HeaderContainer>
      {isLogin && (<div>
      <Button onClick={openUserHandler
      }>Expenses</Button>
      <Button onClick={openExpenseHandler}>Users</Button>
      <Button onClick={logOutHandler}>Logout</Button>
      </div>)}
      
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
 width:100%;
 height:80px;
 background-color: #f8dfff;
 display:flex;
 align-items:center;
 justify-content:flex-end;
 gap:20px;
 margin-bottom:20px;
 border-radius:5px;
 


 


`
