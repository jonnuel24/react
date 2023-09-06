import React from 'react'
import pic from '../asset/images/animal_profile.png';
import '../asset/styles/animalProfile.css'

function AnimalProfile() {
  return (
    <div className='image'>
      <figure>
        <img src={pic} alt="" className='animal' />
      </figure>
      <figcaption>
        Cattles
      </figcaption>
    </div>
  );
}

export default AnimalProfile