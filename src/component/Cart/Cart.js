import React , {useContext } from 'react'
import MealCard from '../Meals/MealCard'
import Modal from '../UI/Modal';
import CartContext from "../../store/cart-context";
import CartItem from './CartItem';
const Cart = (props) => {

    const cntx = useContext(CartContext);
   
  return (
    <Modal onClick={props.onCloseCart} >

        <div className='card w-50 mx-auto '>
        <div className='text-center font-semibold  text-2xl  '> Your Cart </div>
        <div className='overflow-y-scroll h-80'>{
            cntx.items.map((item)=>{
                return <CartItem key = {Math.random().toString()} item = {item}  />
            })
         }</div> 
         <div className='flex  justify-start  gap-3 mt-1'>
            <p className='text-xm '> Total Amount : </p>
            <span className='font-bold '>$ {cntx.totalAmount} </span>
         </div>
         <div className='flex gap-3 justify-end'>
            <button className='rounded-lg  ring-2 ring-pink-500 px-2' onClick={props.onCloseCart}>Close</button>
            <button className='bg-pink-500 rounded-lg ring  ring-pink-500  text-white px-2'> Order</button>
         </div>

        </div>
    </Modal>
  )
}

export default Cart