import{validateDetails  }  from '../src/utils'

function details () {

return (
<div>
    <h2 className="booking">Booking Details</h2>


    <h2 className="card">Card Details</h2>
</div>
)
}




function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new date(stringify);
    
    props.updateTimes(date);
    setFinalTime(pro.availableTimes.map((times) => <option>{times}</option>));
  }



  return (
<div>
        <label htmlFor="date-time-Number of dinners"> Date-Time-Number of dinners</label> <br></br>
        <input
        type="date-time-Number of dinners"
        id="date-"
        required
        value={date}
        onChange={handleDateChange}
        ></input>
      </div>

      
  )

  function  app() {
    setFirstName("")/LastName ("");
    cardNumber ("");


    const validateDetails = () => {
        firstName/LastName &&
        cardNumber;
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
        First name/Last name <sup>*</sup>
    </label>
    <input 
    value={FirstName/LastName}
    onChange={(e) =>{
        setFirstName/LastName(e.target.value);
    } }
    placeholder="First name/Last name"
    required
    />
    </div>
    

<div>
<label htmlFor="card">Card number</label> <br></br>
<input
type="text"
id="card"
placeholder="Card number"
required
value={tel}
onChange={(e) =>{ setcardNumber(e.target.value)}}
></input>
</div>
</fieldset>
</form>
</div>
    )

  }