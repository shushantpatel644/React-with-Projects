import { useState } from "react";
import "./App.css";

function App() {

  const [formData,setFormData] = useState({
    firstName:"",lastName:"",email:"",country:"India",
    streetAddress:"", city:"",state:"",postalCode:"",
    comments:false,candidates:false,offers:false, pushNotifications:""
  })

  function changeHandler(event){
    const{name,value,checked,type}=event.target;
    setFormData( (prev) => ({...prev,[name]:type === "checkbox" ? checked:value}));
  }

  function submitHandler(event){
    event.preventDefault();

    console.log("finally printing the value of form data:");
    console.log(formData);
  }
  return (

   <div className="flex flex-col items-center mt-2">
    <form onSubmit={submitHandler}>
      <label htmlFor="firstName">First Name</label> <br/>
      <input
      type="text"
      name="firstName"
      id="firstName"
      placeholder="your name"
      value={formData.firstName}
      onChange={changeHandler}
      className="outline"
      /> <br />

      <label htmlFor="lastName">Last Name</label> 
      <br/>
      <input
      type="text"
      name="lastName"
      id="lastName"
      placeholder="your last name"
      value={formData.lastName}
      onChange={changeHandler}
      className="outline"
      /> <br />

      <label htmlFor="email">Email Address</label> 
      <br/>
      <input
      type="email"
      name="email"
      id="email"
      placeholder="abc@gmail.com"
      value={formData.email}
      onChange={changeHandler}
      className="outline"
      />
      <br />
      <br />
    
      <label htmlFor="country">Country</label>

      <select 
      id="country"
      name="country"
      value={formData.coutry}
      onChange={changeHandler}
      className="outline"

      >
        <option>India</option>
        <option>USA</option> 
        <option>Japan</option>
        <option>Russia</option>
      </select>
      <br />
      
      <label htmlFor="streetAddress">Your Address</label> 
      <br/>
      <input
      type="text"
      name="streetAddress"
      id="streetAddress"
      placeholder="B-24S"
      value={formData.streetAddress}
      onChange={changeHandler}
      className="outline"/>

      <br/>
      <label htmlFor="city">Street Address</label> 
      <br/>
      <input
      type="text"
      name="city"
      id="city"
      placeholder="B-24F"
      value={formData.city}
      onChange={changeHandler}
      className="outline"/>

      <br/>
      <label htmlFor="state">State/Province</label> 
      <br/>
      <input
      type="text"
      name="state"
      id="state"
      placeholder="Bihar"
      value={formData.state}
      onChange={changeHandler}
      className="outline"
      /> 
      <br/>
      <label htmlFor="postalCode">Zip Code</label> 
      <br/>
      <input
      type="number"
      name="postalCode"
      id="postalCode"
      placeholder="242042"
      value={formData.postalCode}
      onChange={changeHandler}
      className="outline"
      />
      <br />
      <br />
      <fieldset>
        <legend>By Email</legend>
 
        <div className="flex">
        <input
        id="comments"
        name="comments"
        type="checkbox"
        checked={formData.comments}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor="comments">Comments</label>
        <p> Get Notified when someone posts a comments on a posting.</p>
        </div>
        </div>


        <div className="flex">
        <input
        id="candidates"
        name="candidates"
        type="checkbox"
        checked={formData.candidates}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor="candidates">Candidates</label>
        <p> Get Notified when a candidate applies for a job.</p>
        </div>
        </div>


        <div className="flex">
        <input
        id="offers"
        name="offers"
        type="checkbox"
        checked={formData.offers}
        onChange={changeHandler}
        />
        <div>
        <label htmlFor="offers">Offers</label>
        <p> Get Notified when a candidate accepts or rejects an offer.</p>
        </div>
        </div>
      </fieldset>

      <br />
      <br />
      <fieldset>
        <legend>Push Notifications</legend>
        <p>These are delivered via sms to your mobile phone. </p>

        <input
        type="radio"
        id="pushEverything"
        name="pushNotifications"
        value="Everything"
        onChange={changeHandler}
        />
        <label htmlFor="pushEverything">Everything</label>
<br />
        <input
        type="radio"
        id="pushEmail"
        name="pushNotifications"
        value="same as email"
        onChange={changeHandler}
        />
        <label htmlFor="pushEmail">Same as Email</label>
      <br />
      
        <input
        type="radio"
        id="pushNothing"
        name="pushNotifications"
        value="No push Notifications"
        onChange={changeHandler}
        />
        <label htmlFor="pushNothing">No push Notifications</label>
        
        <br />
        <br />

        <button className="bg-blue-500 text-white font-bold rounded py-2 px-6">Save</button>
        
        </fieldset></form></div>
  );
}

export default App;
