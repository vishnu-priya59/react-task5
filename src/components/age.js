import React, { useState } from 'react';

function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(dateOfBirth);
      const ageDiff = today - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <center>
      <div style={{ paddingTop: '200px' }}>
        <h1>Age Calculator</h1>
        <h4 style={{ marginBottom: '5px' }}>Enter your date of birth</h4>
        <input
          type="date"
          style={{
            width: '250px',
            height: '25px',
            marginBottom: '10px',
            marginTop: '0px',
            borderRadius: '5px',
            border: '1px solid lightgray'
          }}
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
        /><br></br>
        <button
          onClick={calculateAge}
          style={{
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            height: '30px'
          }}
        >
          Calculate Age
        </button>
        <h3>{age !== null ? 'You are ' + age + ' years old' : ''}</h3>
      </div>
    </center>
  );
}

export default AgeCalculator;