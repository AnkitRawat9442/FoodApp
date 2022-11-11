import React , {useState , useRef } from 'react'

const InputMeal = (props ) => {

    const  [numberOfItem , setnumberOfItem]    = useState(0);
   const numbItem = useRef();


   const onChangeHandler = (e)=>{
    setnumberOfItem(e.target.value);
   }
    const onSubmitHandler  = (event) =>{
        event.preventDefault();
        
        if(numberOfItem === '5')
         return ;
         setnumberOfItem((pre)=>{
            return +pre +  1 ;
         })
         console.log(numbItem.current.value);
        const numberOfItemOrder = numbItem.current.value;
        props.addToCardHandler(+numberOfItemOrder  );
    }   
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col   items-end gap-2 " >
            <div className='flex flex-col items-end gap-2'>
                <label htmlFor='numberofitem' >Number</label>
                <input ref={numbItem} className='w-32 text-end font-semibold' type="Number" id="numberofitem"  onChange={onChangeHandler} value={numberOfItem} /> 
            </div>
            <button type="submit" className=' rounded-full bg-pink-500 w-10 h-10  relative text-white p-1 '>
                <p className='font-bold text-4xl text-center absolute -top-1  right-2 '> + </p>
            </button>

        </form>

    )
}

export default InputMeal