import React, { useState } from 'react';

const PetForm = () => {
  const [color, setColor] = useState('');
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [hasSubmitted,setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setName("");
    setAge(0);
    setColor("");
  }

  return (
    <>
      <h2>Register Your Pet</h2>
      <h3>Please fill in your pet's details below</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Pet's Name:
            <input type="text" 
            value={name} 
            onChange={(e) => { setName(e.target.value); 
                              setSubmitted(false) }} /></label>
        </div>
        <div>
        <label>Pet's Age:
            <input type="number" 
            value={age} 
            onChange={(e) => { setAge(e.target.value); 
                              setSubmitted(false) }} /></label>
        </div>
        <div>
        <label>Pet's color:
            <input type="text" 
            value={color} 
            onChange={(e) => { setColor(e.target.value); 
                              setSubmitted(false) }} /></label>
        </div>
        <input type="submit" value="Submit" id="submit-button" onClick={handleSubmit}/>
        
      </form>
      <div id="results">
        <h3>Results</h3>
            Name: {name}<br />
            Name: {age}<br />
            Name: {color}<br />
            {hasSubmitted && <div>Thank you for submitting</div> }
      </div>
    </>
  );
}

export default PetForm;