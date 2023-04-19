import './App.css';
import { Expenses } from './components/expenses/Expenses';
import { NewExpense } from './components/newExpense/NewExpense';
import { useState } from 'react';

function App() {
  const [newProduct, setNewProduct]=useState([
    {
      title:'alma',
      price:120,
      date: new Date ( "2023,05,19"),
      id:'1'
    }
  
  ])
  function addExpenseHandler(data){
    setNewProduct([...newProduct, data])
  }

  function deleteExpenses (id){
    const newData = newProduct.filter((el)=>el.id !== id);
    setNewProduct(newData)
    console.log(newData);
    
  }
  return (
    <div className="App">
      <NewExpense addExpenseHandler={addExpenseHandler}/>
      <Expenses data={newProduct} onDelete={deleteExpenses}/>
    </div>
  );
}

export default App;
