import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
function Cards() {
  return (
    <div className='cards'>
        <h1> Check out these EPIC Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-9.jpg"
                    text="Explore the hidden waterfall deep inside the Amazon Jungle"
                    label='Adventure'
                    path='/services'
                     />
                  <CardItem
                    src="images/img-2.jpg"
                    text="Travel through the islands of Bali in a Private Cruise T&C"
                    label='Luxury'
                    path='/services'
                     />
                     <CardItem
                    src="images/img-3.jpg"
                    text="Hire your own Boat to explore the ocean with friends or alone"
                    label='Thrill'
                    path='/services'
                     />
                     <CardItem
                    src="images/img-4.jpg"
                    text="Explore the hidden gems of the world that you might not know of"
                    label='Adventure'
                    path='/services'
                     />
                   <CardItem
                    src="images/img-5.jpg"
                    text="See the City lights glow brither than ever and filled with energy"
                    label='Exciting'
                    path='/services'
                     />
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards