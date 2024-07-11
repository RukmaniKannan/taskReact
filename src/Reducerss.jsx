import React, { useReducer } from 'react'

 const reduce = (state,action) =>{
    switch(action.type){
        case "DEPOSITE":
          return  state + action.payload
            case "WITHDRAW":
             return   state - action.payload
                default:
                    return state
    }

 }
const Reducerss = () => {

    const deposite =(amount) =>{
        dispatch({type:"DEPOSITE",payload:amount})
    }

    const withdraw =(amount)=>{
        dispatch({type:"WITHDRAW", payload:amount})
    }



const [state,dispatch] = useReducer(reduce,1000)
  return (
    <>
    <h1>eeeeeeee</h1>
    <h3>{state}</h3>
    <button onClick={()=>deposite(500)}>DEPOSITE</button>
    <button onClick={()=>withdraw(200)}>WITHDRAW</button>
    
    </>
  )
}

export default Reducerss