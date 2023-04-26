// import { useState } from "react";
// import Button from "../UI/Button";
// import styled from "styled-components";

// export const Login = ({ setIsLogin }) => {
//   const [enteredEmail, setEnteredEmail] = useState("");
//   const [emailIsValid, setEmailIsValid] = useState();
//   const [enteredPassword, setEnteredPassword] = useState("");
//   const [passwordIsValid, setPasswordIsValid] = useState();
//   const [formIsValid, setFormIsValid] = useState(false);

//   const emailChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);

//     setFormIsValid(
//       event.target.value.includes("@") && enteredPassword.trim().length >= 6
//     );
//   };

//   const passwordChangeHandler = (event) => {
//     setEnteredPassword(event.target.value);

//     setFormIsValid(
//       event.target.value.trim().length >= 6 && enteredEmail.includes("@")
//     );
//   };

//   const validateEmailHandler = () => {
//     setEmailIsValid(enteredEmail.includes("@"));
//   };

//   const validatePasswordHandler = () => {
//     setPasswordIsValid(enteredPassword.trim().length >= 6);
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     setIsLogin(enteredEmail, enteredPassword);
//   };

//   return (
//     <>
//       <form  onSubmit={submitHandler}>
//         <div

//         >
//           <label htmlFor="emailInput"> Login</label>
//           <input
//             type="email"
//             id="emailInput"
//             value={enteredEmail}
//             onChange={emailChangeHandler}
//             onBlur={validateEmailHandler}
//           />
//         </div>
//         <div

//         >
//           <label htmlFor="passwordInput"> Password</label>
//           <input
//             style={{ borderColor: "red", background: "red" }}
//             type="password"
//             id="passwordInput"
//             value={enteredPassword}
//             onChange={passwordChangeHandler}
//             onBlur={validatePasswordHandler}
//           />
//           <div >
//             <Button
//               type="submit"
//               onClick={setIsLogin}
//               disabled={!formIsValid}
//             >
//               Login
//             </Button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// };

// //   return (
// //     <LoginCard onSubmit={submitHandler}>
// //       <div>
// //         <Labels htmlFor="email">E-Mail</Labels>
// //         <InputLogin
// //           type="email"
// //           id="email"
// //           value={enteredEmail}
// //           onChange={emailChangeHandler}
// //           onBlur={validateEmailHandler}
// //           style={
// //             emailIsValid === false
// //               ? { backgroundColor: "#ff000072" }
// //               : { backgroundColor: "#0026ff71" }
// //           }
// //         />
// //       </div>

// //       <div>
// //         <Labels htmlFor="password">Password</Labels>
// //         <InputLogin
// //           type="password"
// //           id="password"
// //           value={enteredPassword}
// //           onChange={passwordChangeHandler}
// //           onBlur={validatePasswordHandler}
// //           style={
// //             passwordIsValid === false
// //               ? { backgroundColor: "#ff000072" }
// //               : { backgroundColor: "#0026ff71" }
// //           }
// //         />
// //       </div>

// //       <div>
// //         <Button disabled={!formIsValid} onClick={setIsLogin}>
// //           Login
// //         </Button>
// //       </div>
// //     </LoginCard>
// //   );
// // };

// // const InputLogin = styled.input`
// //   width: 400px;
// //   height: 40px;
// //   border-radius: 5px;
// //   margin-top: 20px;
// //   background-color: lightblue;
// //   border-color: lightgray;
// // `;
// // const LoginCard = styled.form`
// //   width: 700px;
// //   height: 250px;
// //   border-radius: 5px;
// //   border: 1px;
// //   display: flex;
// //   flex-direction: column;
// //   align-items: center;
// //   justify-content: center;
// //   box-shadow: 2px 2px 12px 3px rgba(0, 0, 0, 0.2);
// //   margin-top: 200px;
// // `;
// // const Labels = styled.label`
// //   margin-right: 30px;
// //   text-align: start;
// // `;
// // const Button = styled.button`
// //   margin-top: 10px;
// //   width:120px;
// //   padding: 20px;
// //   font-weight: 600;
// //   color: aliceblue;
// //   background-color: #4a026b;
// //   border: none;
// //   border-radius: 10px;
// //   &&:hover{ background-color: #29043a};

// // `

import React, { useState } from "react";
import classes from "./Login.module.css";

export const Login = ({ setIsLogin }) => {
  const [entredEmail, setEnteredEmail] = useState("");
  const [emailIsValid, setEmailIsValid] = useState();
  const [entredPassword, setEnteredPassword] = useState("");
  const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const emailInput = (e) => {
    setEnteredEmail(e.target.value);

    setFormIsValid(
      e.target.value.includes("@") && entredPassword.trim().length >= 6
    );
  };

  const passwordInput = (e) => {
    setEnteredPassword(e.target.value);

    setFormIsValid(
      e.target.value.trim().length >= 6 && entredEmail.includes("@")
    );
  };
  const vlaidatePassword = () => {
    setEmailIsValid(entredEmail.includes("@"));
  };

  const validateEmail = () => {
    setPasswordIsValid(entredPassword.trim().length >= 6);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLogin(entredEmail.entredPassword);
  };

  return (
    <>
      <form className={classes.formContainer} onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="emailInput"> Login</label>
          <input
            type="email"
            id="emailInput"
            value={entredEmail}
            onChange={emailInput}
            onBlur={validateEmail}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor="passwordInput"> Password</label>
          <input
           
            type="password"
            id="passwordInput"
            value={entredPassword}
            onChange={passwordInput}
            onBlur={vlaidatePassword}
          />
          <div className={classes.wrapper}>
            <button type="submit" onClick={setIsLogin} disabled={!formIsValid}>
              Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
