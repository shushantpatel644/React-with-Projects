import logo from './logo.svg';
import './App.css';
import { eventWrapper } from '@testing-library/user-event/dist/utils';
import { useState } from 'react';

function App() {
//state variable

// const[firstName,setFirstName]=useState("");
// const[lastName,setLastName]=useState("");


//   function changeFirstNameHandler(event){
//     // console.log("printing first name");
//     // console.log(event.target.value);
//     setFirstName(event.target.value); 
//   }
  
//   function changeLastNameHandler(event){
//     // console.log("printing last name");
//     // console.log(event.target.value);
//     setLastName(event.target.value);
//   }

//obejct
// use starte return only in array two value,  value and funtion 
const[formData,setFormData]=useState( {firstName:"",lastName:"",email:"",
comments:"",isVissible:true , mode:"mode",favCar:""} );
// console.log(formData);


function changeHandler(event){
  const {name,value,checked,type}=event.target;
  setFormData(prevFormData => {
    return{
      ...prevFormData,
      // [event.target.name]: event.target.value 
      [name]:type === "checkbox" ? checked:value
    }
});
}

function submitHandler(event){
  event.preventDefault();
  console.log("finally printing  the entire form ka data...... ")
  console.log(formData)
}
  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input 
        type='text'
        placeholder='first-name'
        onChange={changeHandler}
        name='firstName'
        value={formData.firstName}
        />

        <br>
        </br>
        <br/>
        <input 
        type='text'
        placeholder='last-name'
        onChange={changeHandler}
        name='lastName'
        value={formData.lastName}
        />

        <br>
        </br>
        <br/>
        <input 
        type='email'
        placeholder='Enter your email here'
        onChange={changeHandler}
        name='email'
        value={formData.email}
        />
        <br></br>
        <br></br>

        <textarea
        placeholder='Enter your comments here'
        onChange={changeHandler}
        name='comments'
        value={formData.comments}
        />

        <br/>
        <br/>
        <input
        type='checkbox'
        onChange={changeHandler}
        name='isVissible'
        id='isVissible'
        checked={formData.isVissible}
        />

        <label htmlFor='isVissible'>Am I Vissible</label>
        
        <br/>
        <br/>

        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Online-Mode"
        id='Online-Mode'
         checked={formData.mode === "Online-Mode"}
        />
        <label htmlFor='Online-Mode'>Online mode</label>

        <br/>
        <br/>

        <input
        type='radio'
        onChange={changeHandler}
        name='mode'
        value="Offline-Mode"
        id='Offline-Mode'
        checked={formData.mode === "Offline-Mode"}

        />
        <label htmlFor='Offline-Mode'>Offline Mode</label>

          <br/>
          <br/>

          <label htmlFor='favCar'>Tell me the fav Car</label>
        <select 
        name="favCar"
        id='favCar'
        value={formData.favCar}
        onChange={changeHandler}
        >
          <option value="scripo">Scarpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="tharr">Tharr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
          <option value="Audi">Audi</option>
          
        </select>

        <br/>
        <br/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
