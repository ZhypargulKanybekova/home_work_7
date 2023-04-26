import React from "react";
import styled from "styled-components";
 const Button = (props) => {
  return (
    <ButtonStyles style={{ marginRight: props.marginRight }} onClick={props.onClick}>
      {props.children}
    </ButtonStyles>
  );
};

export default Button;
const ButtonStyles = styled('button')`
  padding: 20px;
  font-weight: 600;
  color: aliceblue;
  background-color: #4a026b;
  border: none;
  border-radius: 10px;
  &&:hover{ background-color: #29043a};
`