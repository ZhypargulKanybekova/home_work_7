import React from "react";
import styled from "styled-components";
export const Input = (props) => {
  return (
    <div>
      <LabelStyle htmlFor={props.id}>
        {props.children}
      </LabelStyle>
      <InputsStyle
        className="input"
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
};

const LabelStyle = styled('label')`
  font-size: large;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-weight: bold;
  margin-left: 1rem;
`
const InputsStyle = styled('input')`
  width: 340px;
  height: 39px;
  border-radius: 8px;
  border-color: #ad9be9;
`
