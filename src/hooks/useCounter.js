import { useState } from "react"

export const useCounter =(initialValue=10)=>{
    
    const [counter, setCounter] = useState(initialValue)
    const increment =(value=1)=>{
        setCounter (counter +value )
    }
    const decremente=(value=1)=>{
        setCounter(counter-value)
    }
    return{
        counter,
        increment,
        decremente
    }
}