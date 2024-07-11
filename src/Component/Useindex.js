import React, { useState } from 'react'

const Useindex = () => {
  const [data, setData] = useState([])
  const [fname, setFname] = useState("")
  const [no, setNo] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState(null)

//  updatachanges...........
  const handlesubmit = () => {
    if(fname !==""&& no !=="" && email !==""){
    if (id) {
      console.log(id);
      console.log("update");
      const Updatadchange = {
        id:id,
        fname:fname,
        no:no,
        email:email
      }
      setData(data.map((key) => key.id === id ? Updatadchange : key))
    }else{
      console.log("submit");
    //  create .........................
      setData((item) => [
        ...item,
        {
          id: Date.now(),
          fname,
          no,
          email,
        }
      ]
      )
         // datas emty.............
    

    }
    setFname("")
    setNo("")
    setEmail("")
    setId('')

  }

  
  }
  // deleted ................
  const handleDelete = (id) => {
    const Updatedated = data.filter(item => item.id !== id)
    setData(Updatedated)
  };
console.log(data);
// patch data........
  const updated = (val) => {
    setFname(val.fname)
    setEmail(val.email)
    setNo(val.no)
    setId(val.id)
  }

return (
    <>
      <h1>Hii</h1>
      <label >Name</label>
      <input type="text" className='mx-4' value={fname} onChange={(e) => setFname(e.target.value)} /><br />
      <label>Age</label>
      <input type="number" value={no} onChange={(e) => setNo(e.target.value)} /><br />
      <label>Email</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
      <button onClick={handlesubmit}>{id?"update":"submit"}</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Delete</th>
          <th>Update</th>

        </tr>
        <tbody>
          {data.map((val) => (
            <tr key={val.id}>
              <td>{val.fname} </td>
              <td>{val.no} </td>
              <td>{val.email} </td>
              <td><button onClick={() => handleDelete(val.id)}>Delete</button></td>
              <td><button onClick={() => updated(val)}>update</button></td>
            </tr>
          )
          )}

        </tbody>

      </table>

    </>
  )
}

export default Useindex