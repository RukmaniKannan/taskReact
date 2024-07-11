import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
  const initialValues= {
    name:"rukku",
    email:"",
    number:"",
  }
 const  onSubmit=values =>   {
    console.log('form data',values)

}
const  validate=values => {
  let errors = {}
    if(!values.name){
      errors.name="Required"
    }
    if(!values.email){
      errors.email="Required"
    }
    if(!values.number){
      errors.number="required"
    }
  return errors 
}
const validationSchema = Yup.object({
  name: Yup.string().required("Required!"),
  email: Yup.string().required("Required.....!"),
  number:Yup.string().required("Required")
})
const OldForMik = () => {
    const formik =useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema
    })
        console.log("visited",formik.touched);
  return (
    <div>
          <div className=''>
        <h1>Formik</h1>
        <form onSubmit={formik.handleSubmit}>
       <div className='form-control'>
       <label htmlFor='name'>Name</label>
        <input type="text" className='' id="name" name='name' onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.name} />
        {formik.touched.name &&  formik.errors.name ?<div className='error' style={{color:"red"}}>{formik.errors.name}</div> : null}  </div><br/>
        <div className='form-control'>
        <label htmlFor='email'>email</label>
        <input type="email" className='' id="email" name='email'onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.email} />
        {formik.touched.email &&   formik.errors.email?<div className='error' style={{color:"red"}}>{formik.errors.email}</div> : null}  </div><br/>
       <div className='form-control'>
       <label htmlFor='number' >Number</label>
        <input type="number" className='' id='number' name='number'onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
        value={formik.values.number} />
        { formik.touched.number && formik.errors.number ?<div className='error' style={{color:"red"}}>{formik.errors.number}</div> : null} </div><br/>
        <button>submit</button>
        </form>
        </div>
    </div>
  )
}

export default OldForMik