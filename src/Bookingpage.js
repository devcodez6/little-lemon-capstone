import { useState } from "react";
import { Routes, Route, useLinkClickHandler } from "react-router-dom";
import {useEffect} from "react"

<Routes> 
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/booking" element={<BookingPage />}></Route>
</Routes>


    function GoalForm() {
      const [foreData, setformData] = React.useState({goal:"",by: ""});
      function changeHandler(e) {
        
        setformData ({ ...FormData, [e.target.name]: e.target.value });
      }
    }
      function submitHandler(e) {
        e.preventDefault();
        props.onAdd(FormData);
        setFormData({goal: "", by: ""})
      }
    
      return (
        <>
        <form onSubmit={submitHandler,GoalForm }  style="display: grid; max-width: 200px; gap: 20px">
    <label For="res-date">Choose date</label>
    <input type="date" id="res-date"/>
    <label For="res-time">Choose time</label>
    <select id="res-time " >
   
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
    </select>
    <label For="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="1" id="guests"/>
    <label For="occasion">occasion</label>
    <select id="occasion">
        <option>Birthday</option>
        <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation"/>
        <button onSubmit={useLinkClickHandler}></button>
  </form>
</>

    ); 
    export default App
        
      


     
     