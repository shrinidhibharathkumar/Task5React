import React, { useState } from 'react';
import './App.css';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();
    // Check if the birthday has occurred this year
    if (
      currentDate.getMonth() < birthDate.getMonth() ||
      (currentDate.getMonth() === birthDate.getMonth() &&
        currentDate.getDate() < birthDate.getDate())
    ) {
      setAge(ageDifference - 1);
    } else {
      setAge(ageDifference);
    }
  };

  return (
    <div>
      <div>
        <h1 className='c1'>Age Calculator</h1>
        <h3>Enter your date of birth</h3>
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
      </div>
      <div>
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && <h2>Your are {age} years old</h2>}
    </div>
  );
};

export default AgeCalculator;