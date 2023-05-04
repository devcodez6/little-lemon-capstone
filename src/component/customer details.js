import { useState } from 'react';
import{validateEmail  }  from '../src/utils'
import './App.css';

<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/login" element={<BookingPage />}></Route>
</Routes>




function App() {
       setFirstName ("");
        setLastName("");
        setTel("");
        setEmail("");
        setPassword({
            value:"",
            isTouched:false, 
        });
        steRole("role");
    }
    const validateDetails = () => {
        firstName &&
        validateEmail(email) &&
        password.value.length >= 8 &&
        role !== "role"
    }

const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();
};





return (
<div className="App">
<form onSubmit={handleSubmit, clearForm, validateDetails } >
<fieldset>  
<div className="Field">
    
    <label>
        First name <sup>*</sup>
    </label>
    <input 
    value={FirstName}
    onChange={(e) =>{
        setFirstName(e.target.value);
    } }
    placeholder="First name"
    />
</div>
<button type='submit'>Submit</button>
</fieldset>



 <div className="App"></div>
 <div className="Field">
     <label>
        Last name <sup>*</sup>
    </label>
 <input 
    value={LastName}
    required
    onChange={(e) =>{
        setLastName(e.target.value);
    } }
    placeholder="Last name"
    />
</div>

<div>
        <label htmlFor="phonenum">Phone number</label> <br></br>
        <input
        type="text"
        id="phonenum"
        placeholder="(xxx)-xxx-xxx"
        required
        value={tel}
        onChange={(e) =>{ setTel(e.target.value)}}
        ></input>
      </div>



<div className="Field">
    <label>
       Email address <sup>*</sup>
    </label>
    <input 
    value={email}
    required
    onChange={(e) =>{
        setEmail(e.target.value);
    } }
    placeholder="Email address"
    />
</div>

<div className="Field">
  <label>
    Password <sup>*</sup>
  </label>
  <input
  value={Password.value}
  type="Password"
  onChange={(e)=> {
    setPassword({ ...password, isTouched});
  } }
  onBlur={() =>{
    setPassword({ ...password,isTouched: true});
  } }
placeholder="Password"
required
/>
{password.isTouched && password.value.lengh <8? 
    <PasswordErrorMessage/>
 : null}
</div>

<div>
      <label htmlFor="prefrences">Seating prefences</label> <br></br>
      <textarea
      id="comments"
      rows={8}
      cols={50}
      placeholder="Additional Comments"
      value={comments}
      onChange={(e) => setComments(e.target.value)}
      ></textarea>
      </div>
     
     <div>
        <h3>Continue</h3>
     </div>

</form>
</div>

)

    const validatedetails = () => {
        firstName &&
        validateEmail(email) &&
        password.value.length >= 8 &&
        role !== "role"
    }



// const clearForm = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword({
//         value:"",
//         isTouched:false, 
//     });
//     steRole("role");
//}

export default App