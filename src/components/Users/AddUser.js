import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import UserList from "./UserList";
import ErrorModal from "../UI/ErrorModal";
const AddUser = (props) => {
  
  
  const [error,setError]=useState();
  const nameInputRef=useRef();
  const ageInputRef=useRef();
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(nameInputRef,ageInputRef)
    let enteredUserName=nameInputRef.current.value
    let enteredAge=ageInputRef.current.value
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
        setError({
            title:"invalid input",
            message:"please enter a valid name and age"
        })
        return;
    }
    if (+enteredAge < 1) {
      setError({
        title:"Invalid age",
        message:"Please enter a valid age(>0)"
      })
      return;
    }
    
    console.log(enteredUserName, enteredAge);
    props.onAddUser(enteredUserName, enteredAge);
    nameInputRef.current.value="";
    ageInputRef.current.value="";
  };
  
  const errorHandler=(event)=>{
    setError(null);
  }
  return (
    <div>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"

          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          id="age"
         
          ref={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};
export default AddUser;
