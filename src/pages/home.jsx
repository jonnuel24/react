import React from 'react'
import Navbar from '../Components/navbar'
import Footer from '../Components/footer'
import AnimalProfile from '../Components/animalProfile'
import '../asset/styles/home.css'
import Card from '../Components/card'

function home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
        <section className='flex flex-col items-start py-16 px-32'>
          <header>
          Welcome <strong>Gasgos,</strong>
          </header>

          <div className='flex justify-between w-full items-center'>
            <div className='flex hover:flex-row gap-2 filter'>
              <a href="" className='bg-[#006838] active'><div className='text-white'>All</div></a>
              <a href=""><div>Popular</div></a>
              <a href=""><div>New in</div></a>
              <a href=""><div>Best Rating</div></a>
              <a href=""><div>highest price</div></a>
              <a href=""><div>Lowest Price</div></a>
            </div>

            <div className='flex gap-4'>
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              <AnimalProfile />
              
            </div>
          </div>
        </section>
          

        <section className='card0'>
          <div className='flex flex-wrap card1'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>

      <Footer />
    </div>
  );
}

export default home;