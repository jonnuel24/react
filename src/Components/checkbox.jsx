import React from 'react';
import '../asset/styles/signup.css';

function Checkbox() {

  return (
    <div className="form-check">
      <input className="form-check-input d-flex" type="checkbox" value="" id="flexCheckIndeterminate"/>
      <label className="form-check-label" for="flexCheckIndeterminate">
       I Agree to Agripeller's Policy. <a href="" className='text-[#006838] '>Read Policies</a>
      </label>
    </div>
  );
}

export default Checkbox;
