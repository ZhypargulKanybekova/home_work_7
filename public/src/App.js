import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/newExpense/NewExpense';
import { useState } from 'react';

function App() {
  const [dumai, setDumai]=useState([
    {
      title:'alma',
      price:'120',
      date: new Date().toLocaleDateString(),
      id:'1'
    },
  ])
  function addExpenseHandler(data){
    setDumai([...dumai, data])
  }
  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses data={dumai}/>
    </div>
  );
}

export default App;
