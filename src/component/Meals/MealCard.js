import React, {useContext } from 'react'
import CartContext from "../../store/cart-context";
import InputMeal from './InputMeal';

const MealCard = (props) => {
 

    const cntx = useContext(CartContext);
    const addToCardHandler = (n) =>{
        
        cntx.addItem({
              
                id: props.meal.id , 
                name: props.meal.name, 
                description :props.meal.description,
                price: props.meal.price,
                src : props.meal.src , 
                numberOfItem : n 
        })
    }

    

    return (
        <div className='card p-0 w-60 h-80 flex flex-col justify-between  transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '>
            <div className=' w-full h-50 ' >   <img className='cover ' src={props.meal.src} alt="no food " /> </div>
           <div className='p-2'>
           <div className='  font-semibold '>  {props.meal.name} </div>
           
           <div className='flex flex-row  justify-between  items-center'>
               <p>₹ {props.meal.price}</p>
               <InputMeal addToCardHandler = {addToCardHandler } />
              
           </div>
           </div>
        </div>
    )
}

export default MealCard;