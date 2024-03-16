import React from 'react';
import '../asset/styles/signup.css';
import { Link } from 'react-router-dom';

function Checkbox({agreed, setAgreed}) {
  return (
    <div className="form-check">
      <input
        checked={agreed}
        onChange={() => setAgreed(!agreed)}   
        className="form-check-input d-flex" 
        type="checkbox" 
        value="" 
        id="flexCheckIndeterminate"/>
      <label className="form-check-label" for="flexCheckIndeterminate">
       I Agree to Agripeller's Policy. <Link className='text-[#006838] '>Read Policies</Link>
      </label>
    </div>
  );
}

export default Checkbox;
