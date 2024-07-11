import React,{useReducer} from 'react'

export const Reducerrr = () => {
     const reduce = (state,action) =>{
        switch(action.type){
            case"withdraw":
           return state-action.payload;
           case "deposite":
            return state+action.payload;
            default:
            return state

        }

     }
    const[state,dispatch]=useReducer(reduce,1000)

    const withdraw=(amount) =>{
        dispatch({type:"withdraw", payload:amount})
    }
    const deposite=(amount)=>{
        dispatch({type:"deposite",payload:amount})
    }
  return (
    <>
    <h1>{state}</h1>
    <button onClick={() => withdraw(100)}>-</button>
    <button onClick={() =>deposite(500)}>+</button>
    </>
  )
}
