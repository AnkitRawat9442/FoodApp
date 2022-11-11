import React from 'react'
import MealCard from './MealCard';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
      src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c1.png?raw=true"
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
      src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c2.png?raw=true"
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
      src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c3.png?raw=true"
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
      src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c6.png?raw=true"
    },
    {
        id: 'm5',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
        src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c1.png?raw=true"
      },
      {
        id: 'm6',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
        src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c2.png?raw=true"
      },
      {
        id: 'm7',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
        src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c3.png?raw=true"
      },
      {
        id: 'm8',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
        src : "https://github.com/Vetrivel-VP/foodapp-yt-mar22/blob/master/src/img/c6.png?raw=true"
      },
  ];
 
const AvailableMeals = () => {

  
  return (
    <section className='bg-white'>
        <div className='w-screen h-max grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-5   place-items-center p-5  '>
       { DUMMY_MEALS.map((meal)=>{
            return  <MealCard key = {meal.id}  meal = {meal}  />
        })}
        </div>

    </section>
  )
}

export default AvailableMeals