import { ExpensesCard } from "./ExpensesCard";
import { ExpenseFilter } from "./ExpenseFilter";
import { ExpenseCharts } from "../Chart/ExpenseCharts";
import { useState } from "react";


export const Expenses = ({data}) => {
  const [selectedYear,setSelectedYear]= useState("2023")

  function getSelectedValue (event){
    
    setSelectedYear(event.target.value)
  }
  console.log(data)
  const filtiredYear = data.filter((el)=>{
    const stringifiedYear = new Date ( el.date).getFullYear().toString();
    return  stringifiedYear === selectedYear
    
  })

  console.log(filtiredYear,'year')
  
  
  
  
  return (
    <div
      style={{
        width: "790px",
        padding: "30px 20px",
        marginTop: "20px",
        backgroundColor: "#1F1F1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
    <ExpenseFilter getValue={getSelectedValue} />
    <ExpenseCharts filteredExpenses={filtiredYear} />
      {filtiredYear.map((el) => {
        return <ExpensesCard key={el.id} el={el}    />;
      })}
    </div>
  );
};
