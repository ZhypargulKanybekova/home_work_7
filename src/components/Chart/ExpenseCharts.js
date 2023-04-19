import React from "react";
import { ExpenseChartBar } from "../ChartBar/ExpenseChartBar";
import styled from "styled-components";


export const ExpenseCharts = ({ filteredExpenses }) => {
  const months = [
    { label: "Jan", currentPrice: 0 },
    { label: "Feb", currentPrice: 0 },
    { label: "Mar", currentPrice: 0 },
    { label: "Apr", currentPrice: 0 },
    { label: "May", currentPrice: 0 },
    { label: "Jun", currentPrice: 0 },
    { label: "Jil", currentPrice: 0 },
    { label: "Aug", currentPrice: 0 },
    { label: "Sep", currentPrice: 0 },
    { label: "Oct", currentPrice: 0 },
    { label: "Nov", currentPrice: 0 },
    { label: "Dec", currentPrice: 0 },
  ];
  filteredExpenses.forEach((element) => {
    const monthNumber = new Date(element.date).getMonth();
    months[monthNumber].currentPrice += element.price;
  });
  return (
    // <div className="asdf">
      <ChartContainer>
        {months.map((el) => {
          return (
            <ExpenseChartBar
              key={el.label}
              label={el.label}
              currentPrice={el.currentPrice}
            />
          );
        })}
      </ChartContainer>
    // </div>
  );
};

const ChartContainer = styled('div')`
    width: 100%;
    padding: 1rem;
    border-radius: 12px;
    background-color: #f8dfff;
    text-align: center;
    display: flex;
    justify-content: space-around;
    height: 10rem;
    margin: 0px 50px 30px;
  
`


