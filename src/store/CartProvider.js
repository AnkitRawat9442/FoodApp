import React , {useReducer}  from 'react'
import CartContext from './cart-context'

const defaultCartState = { items : [] , totalAmount : 0 };



const cartReducer = (state , action )=>{
    if(action.type === 'ADD' )
    {
       // console.log(action.item);
      const updatesItems = state.items.concat(action.item)  ;
      const updatedToatlAmount = state.totalAmount + action.item.price*action.item.numberOfItem;
      return {
        items : updatesItems,
        totalAmount : updatedToatlAmount
      }
    }
    return (defaultCartState);
}

const CartProvider = (props) => {
   
    const [cartState , dispatchCartAction  ] = useReducer(cartReducer , defaultCartState);
    const addItemHnadler = (item ) =>{
        dispatchCartAction ({type : "ADD" , item: item })
    }
    
    const removeItemHnadler = (id ) =>{
         dispatchCartAction({type : "REMOVE" , id : id })
    }
    
    
const cartContext = {
    items : cartState.items,
    totalAmount: cartState.totalAmount,
    addItem : addItemHnadler,
    removeItem  :removeItemHnadler ,
} ;


  return (
    <CartContext.Provider value= {cartContext} >
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider