import React, { useState } from "react";
//react component defined  as a function uses state to share data
function DogForm() {
    //set state for each field input
  const [name, setName]=useState('');
  const [breed, setBreed]=useState('');
  const [age, setAge]=useState('');
  
  //need a handleSubmit function thats used in the form jsx
  const handleSubmit = (event) => {
    //needs an anonymous function that takes in an event and use preventDefault to keep from rerender
    event.preventDefault();
    //in this event we are console logging the details
   console.log(name, breed, age);
    //use the state updater to clear the fields
    setName('');
    setBreed('');
    setAge('');
               }
    

  return(
    //opens with a jsx form tag with onSubmit pointing to the handleSubmit anon function
  <form onSubmit={handleSubmit}>
      // label for has to be htmlFor as for is a js reserved keyword  
      <label htmlFor ='name'>
        Enter Dogs Name:
        //each input requires id type name value and on change
        <input id='name' type='text' name='name' value={name} onChange ={(event)=> setName(event.target.value)} />
      </label>
      <label htmlFor='breed'>
        Enter Dog Breed:
        //value should point to the variable of the state
        <input id='breed' type='text' name='breed' value={breed} onChange ={(event)=> setBreed(event.target.value)} />
      </label>
      <label htmlFor='age'>
        Enter Dog Age:
        // onChange takes a callback function that points the event to the state updater function for each input
        <input id='age' type='text' name='age' value={age} onChange ={(event)=> setAge(event.target.value)}/>
      </label>
      <button type='submit'>Submit</button>
  </form> 
      )
}

export default DogForm;
