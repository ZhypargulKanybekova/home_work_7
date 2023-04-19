import React from 'react'
import styled from 'styled-components';

export const ExpenseChartBar = ({currentPrice,label}) => {
  const maximumPrice = 2000;
  const percent = ( 100* currentPrice)/maximumPrice;
  return (
    <ChartBar>
       <ChartBar>
          <ChartBarInner>
            <chartBarFill
            style = {{height:`${percent}`}}
            ></chartBarFill>
          </ChartBarInner>
          <chartBarLabel></chartBarLabel>
          {label}
       </ChartBar>
    </ChartBar>
  )
}

const ChartBar = styled('div')`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30px;
`;

const ChartBarInner = styled('div')`
    height: 100%;
    width: 100%;
    border: 1px solid #313131;
    border-radius: 12px;
    background-color: #c3b4f3;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap:20px;`

const chartBarFill = styled('div')`
background-color: #4826b9;
width: 100%;
transition: all 0.3s ease-out;

`
const chartBarLabel = styled('div')`
font-weight: bold;
font-size: 0.5rem;
text-align: center;
`
