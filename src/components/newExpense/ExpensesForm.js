import { useState } from "react";
import Button from "../UI/Button";
import { Input } from "../UI/Input";


import styled from "styled-components";

export const ExpensesForm = ({ onClick, addExpenseHandler }) => {
  const [inputText, setInputText] = useState("");
  const [inputNumber, setInputNumber] = useState();
  const [inputDate, setInputDate] = useState(null);

  function getInputValue(e) {
    setInputText(e.target.value);
  }
  function getDateInput(e) {
    setInputDate(e.target.value);
  }
  function getNumberInput(e) {
    if (inputNumber <= 0) {
      return 0;
    }
    setInputNumber(e.target.value);
  }
  function submitHandler(e) {
    e.preventDefault();
    const product = {
      id: new Date().toString(),
      title: inputText,
      price: +inputNumber,
      date: new Date(inputDate),
    };
    addExpenseHandler(product);

    setInputDate("");
    setInputNumber("");
    setInputText("");
  }

  return (
    <form onSubmit={submitHandler} className="header">
      <InputsStyles>
        <FirstBlockForInputs>
          <Input
            type="text"
            placeholder="Title"
            children="Title"
            value={inputText}
            onChange={getInputValue}
          />
          <Input
            type="date"
            placeholder="data"
            children="Data"
            value={inputDate}
            onChange={getDateInput}
          />
        </FirstBlockForInputs>
        <SecondBlockForInput
        >
          <Input
            type="number"
            children="Amount"
            placeholder="0"
            value={inputNumber}
            onChange={getNumberInput}
          />
        </SecondBlockForInput>
      </InputsStyles>

      <ButtonsStyle>
        <Button marginRight="50px" onClick={onClick}>
          Отмена
        </Button>
        <Button marginRight="12px">Добавть расход</Button>
      </ButtonsStyle>
    </form>
  );
};

const InputsStyles = styled('div')`
 display: flex;
 margin-left: 30px;
`
const SecondBlockForInput=styled('div')`
display:flex;

` 
 const FirstBlockForInputs = styled('div')`
  `

 const ButtonsStyle = styled('button')`
  margin-top: 20px;
  margin-left: 430px;
  display: flex;
  background-color:#AD9BE9;
  border:none
  ;
 `
