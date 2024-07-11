import React, { useState, useReducer } from 'react'

export const Reduc = () => {
  const reduce = (state, action) => {
    switch (action.type) {
      case "Create":
        return [...state, action.payload];
      case "Deleted":
        return state.filter(item => item.id !== action.payload.id)
      case "updated":
        return state.map(keys => keys.id === action.payload.id ? action.payload.updateddata : keys)
      default:
        
        return state
    }
  }

  const [state, dispatch] = useReducer(reduce, [])
  console.log(state);

  
  const [value, setValue] = useState({
    fname: "",
    password: "",
    id: null,
  })
  const handclick = () => {
    if (value.id) {
      dispatch({
        type: "updated",
        payload: {
          id: value.id,
          updateddata: {
            fname: value.fname,
            password: value.password,
          }
        }
      })
    }else{
    dispatch({
      type: "Create",
      payload: {
        ...value,
        id: Date.now()
      }
    })
  }

    setValue({
      fname: "",
      password: "",
    })
  }
  const deletedbox = (val) => {
    console.log(val);
    dispatch({
      type: "Deleted",
      payload: {
        id: val,
      }
    })
  }
  const updated = (val) => {
    setValue({
      fname: val.fname,
      password: val.password,
      id: val.id,
    })

  }
  return (
    <>
      <h1>Reduce</h1>
      <input type="text" value={value.fname} onChange={(e) => setValue({ ...value, fname: e.target.value })} /><br />
      <input type="text" value={value.password} onChange={(e) => setValue({ ...value, password: e.target.value })} /><br />
      <button onClick={handclick}>Click</button>
      <table>
        <tr>
          <th>fname</th>
          <th>password</th>
          <th>Delete</th>
          <th>Updated</th>
        </tr>
        {state.map((val) =>
          <tr key={val.id}>
            <td>{val.fname}</td>
            <td>{val.password}</td>
            <td><button onClick={() => deletedbox(val.id)}>deleted</button></td>
            <td><button onClick={() => updated(val)}>updated</button></td>
          </tr>
        )}
      </table>
    </>

  )
}
