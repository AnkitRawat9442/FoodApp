import React from 'react'

const CartItem = (props) => {
  return (
    <div className='card  flex flex-row gap-3 items-center m-1 '>
      <div className='w-10 h-8 items-center  flex  '><img className='' src={props.item.src} /></div>
    <div className='flex flex-row gap-2 justify-between  items-center w-full '>
        <div>
        <div>{props.item.name} </div>
        <div> $ {props.item.price}</div>
        </div>
       <div className='flex flex-row gap-2'>
        <button className='rounded-lg  ring-2 ring-pink-500 px-2 font-bold  '> - </button>
        <button className='bg-pink-500 rounded-lg ring  ring-pink-500  text-white px-2 font-bold ' > + </button>
      </div>
    </div>
    </div>
  )
}

export default CartItem