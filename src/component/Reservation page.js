import { useState } from "react";
import { Link } from "react-router-dom"

export default function ReservationForm (props) {
  
  
  
  const [date, setDate] = useState("");
  const [occation, setOccation] = useState("");
  const [prefrences, setPrefrences] = useState("");
  

  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new date(stringify);
    
    props.updateTimes(date);
    setFinalTime(pro.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="reservation-form">
      
    

      

      

     

      <div className="reservation-date">
        <label htmlFor="date">Select Date</label> <br></br>
        <input
        type="date"
        id="date"
        required
        value={date}
        onChange={handleDateChange}
        ></input>
      </div>

      <div className="reservation-occation">
        <label htmlFor="occation">Occation</label> <br></br>
        
        <select 
        id="occation"
        value={occation}
        onChange={(e) => setOccation(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
          </select>
      </div>

      <div className="reservation-prefrences">
       <label htmlFor="prefrences">Seating options</label> <br></br>
       <select
         id="prefrences"
         value={prefrences}
         onChange={(e) => setPrefrences(e.target.value)}
         >
          <option>none</option>
          <option>Indoors (standard)</option>
          <option>Outdoor </option>
          
         </select>
      </div>

      

      <div>
        
        <Link className= "action-button" to="/confirmation">

        </Link>
      </div>
    </form>
  );
  
}




    function GoalForm() {
      const [formData, setformData] = React.useState({goal:"",by: ""});
      function changeHandler(e) {
        
        setformData ({ ...FormData, [e.target.name]: e.target.value });
      }
    }
      function submitHandler(e) {
        e.preventDefault();
        props.onAdd(FormData);
        setFormData({goal: "", by: ""})
      }
    
      
        
      


     
     