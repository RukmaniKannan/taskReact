import React, { useState } from 'react'

function User() {
  const [first, setFirst] = useState([])
 const[showtable, setShowtable]=useState(false);

  const [value, setValue] = useState({
    fname: "rukku",
    num: "123",
    checked: false,
    id: null,
  })
  console.log(value)

 const handleSumit = () => {
  // updated data.............
  setShowtable(true);
    if (value.id) {
      const updatadchange = {
        fname: value.fname,
        num: value.num,
        checked: value.checked,
      }
      setFirst(first.map((val) => val.id === value.id ? updatadchange : val))
    }else{
    setFirst((item) => [
      ...item, {
        id: Date.now(),
        fname: value.fname,
        num: value.num,
        checked:value.checked,
      }
    ]
    )
  }
  
  // datas empty................
    setValue({
      fname: "",
      num: "",
      checked:false,
    })
  }
  const deletedbox = (id) => {
    const dltRows = first.filter(data => data.id !== id);
    setFirst(dltRows);
  };
  
  // patch datas................
  const updated = (keys) => {
    setValue({
      fname: keys.fname,
      num: keys.num,
      checked:keys.checked,
      id:keys.id
      
    })
  }
  

  return (
    <>
    <h1>FORM</h1>
      <input type="text" val
      ue={value.fname} onChange={(e) => setValue({ ...value, fname: e.target.value })} /><br />
      <input type="number" value={value.num} onChange={(e) => setValue({ ...value, num: e.target.value })} /><br />
      <input type="checkbox"value={value.checked} onChange={() => setValue(!value.checked)} /><br />
      <button onClick={handleSumit}>Set</button>
    {showtable && first.length>=1 && (
      <table>
        <tr>
          <th>Name</th>
          <th>Number</th>
          <th>Update</th>
          <th>Deleted</th>
          <th>Checked</th>

        </tr>
        <tbody>
          {first.map((keys,index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{keys.fname}</td>
              <td>{keys.num}</td>
              <td>{keys.checked ?'checked' :'Notchecked'}</td>
             <td><button onClick={() => deletedbox(keys.id)} >Delete</button></td>
              <td><button onClick={() => updated(keys)}>update</button></td>
            </tr>
          )
          )}


        </tbody>
      </table>
   
    )}








    </>
  )
}

export default User