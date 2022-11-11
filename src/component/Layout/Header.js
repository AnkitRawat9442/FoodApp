import React from 'react';
import "./Header.css";
import HeaderCartButton from "./HeaderCartButton" ;
const Header = (props) => {
    return (
        <div  >
            <header className='  w-full bg-white  font-bold   font-serif flex flex-row items-center justify-between px-5 py-3 ' >

                <h1 className='text-3xl font-bold cursor-pointer  text-pink-500'>

                    foodPanda </h1>

                <HeaderCartButton totalInCart = {10} onClick = {props.onShowCart} />
              
                    
                 
              
            </header>
            <div className='header-img ' >
                <img className='header-img-img  object-cover   ' alt="food logo" src="https://www.foodpanda.com/wp-content/uploads/2021/01/foodpanda-model-opt-scaled.jpg" />
            </div>
        </div>
    )
}

export default Header;