import "./App.css";
import { useRef, useState, useEffect } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/newExpense/NewExpense";
import Users from "./components/users/Users.jsx";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
const productt = [
  {
    title: "alma",
    price: 120,
    date: new Date("2023,05,19"),
    id: "1",
  },
];

function App() {
  const someRef = useRef();
  const [openUser, setOpenUser] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [newProduct, setNewProduct] = useState(
    JSON.parse(localStorage.getItem("key")) || productt
  );

  function addExpenseHandler(data) {
    setNewProduct([...newProduct, data]);
  }

  function deleteExpenses(id) {
    const newData = newProduct.filter((el) => el.id !== id);
    setNewProduct(newData);
    console.log(newData);
  }
  
  const loginHandler = () => {
    setIsLogin(true);
    localStorage.setItem("Auth", !isLogin);
  };
  const logOutHandler = () => {
    setIsLogin(false);
    localStorage.removeItem("Auth");
  };

  useEffect(() => {
    localStorage.setItem("key", JSON.stringify(newProduct));
  }, [newProduct]);
 
  useEffect(() => {
    const loginLocalStorage = localStorage.getItem("Auth");
    setIsLogin(loginLocalStorage);
    const showUsersLocalStorage = localStorage.getItem('Users')
    setOpenUser(showUsersLocalStorage)
  }, [isLogin]);


  const openExpenseHandler =  ()=>{
    setOpenUser(true)
    localStorage.setItem('Users',setOpenUser)
  }

  const openUserHandler = ()=>{
    setOpenUser(false)
    localStorage.removeItem('Users')
  }

  return (
    <div className="App">
      <>
        {isLogin ? (
          <>
            <Header
             openExpenseHandler={openExpenseHandler} 
            openUserHandler={openUserHandler}
             isLogin={isLogin}
              logOutHandler={logOutHandler} />
            {openUser ? (
              <Users />
            ) : (
              <>
                <NewExpense
                  addExpenseHandler={addExpenseHandler}
                  ref={someRef}
                />
                <Expenses
                  data={newProduct}
                  onDelete={deleteExpenses}
                  setNewProduct={setNewProduct}
                />
              </>
            )}
          </>
        ) : (
          <Login setIsLogin={loginHandler} />
        )}
      </>
    </div>
  );
}

export default App;
