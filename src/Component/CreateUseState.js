
import React,{useState,useEffect} from 'react'

const CreateUseState = () => {
    // const [num, setNum] = useState(100)
    const [num2, setNum2] = useState(5)
    const [num3, setNum3] = useState(500)


//     let x=1;

//     const handleadd =() =>{
//        x=x+1;
//        console.log("x",x)
//     }
//     const handleadd1 =() =>{
//         setNum((val)=>{
//   return val+1
//         })
//     }
//     console.log(num)
    // useEffect codes....................
    
        useEffect(()=>{ 
            setNum2(2)
            console.log("rukku")
            return () => {
                setNum2(5)
                console.log("clean up")  
            }
        },[num2])


        console.log(num2,)
    

  return (
    <>
    {/* <h1> {x}</h1>
    <button onClick={handleadd}>add</button>
    <h1>{num}</h1>
    <button onClick={handleadd1}>add</button> */}
    <h1>{num2}</h1>
    <button onClick={() =>setNum2((val) => val+1)}>add</button>
    <h1>{num3}</h1>
    <button onClick={() =>setNum3((val) => val+1)}>add</button>




    </>
  )
}

export default CreateUseState