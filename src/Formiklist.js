import React from 'react'
import { Formik,Form,Field,ErrorMessage,  } from 'formik'
import * as yup from 'yup'
 
// const  validate=values => {
//   let errors = {}
//     if(!values.name){
//       errors.name="Required"
//     }
//     if(!values.email){
//       errors.email="Required"
//     }
//     if(!values.number){
//       errors.number="required"
//     }
//   return errors 
// }
 
         
const Formiklist = () => {
  // const [meta]=useField()
//     const formik =useFormik({
//     initialValues,
//     onSubmit,
//     // validate,
//     validationSchema
// })
    // console.log("visited",Formik.touched);
  //   const initialValues= {
  //     name:"",
  //     email:"",
  //     number:"",
  //   }
  //  const  onSubmit=values =>   {
  //     console.log('form data',values)
  
  // }
  // const validationSchema = yup.object().shape({
  //   name: yup.string().required("Required!..."),
  //   email: yup.string().required("Required.....!"),
  //   number: yup.string().required("Required")
  // })
 const initialValues={
    name:"",
    password:"",
    email:""
  }
  const validationSchema =yup.object().shape({
    name:yup.string().required("Required"),
    email:yup.string().email('invalied required') .required('Required')
    // password:yup.string().password('invalied password') .required("Required")
  })
  
  return (
           <Formik 
           initialValues={initialValues}
           validationSchema={validationSchema}>
            <Form>
              <div className=''>
                <label>Name</label>
                  {/* <Field type="text" id="name" name="name" 
                className="error "
                />  */}
                <Field type="text" className='form-control ' name="name"  />
                <ErrorMessage name="name" />

                 <input type="password" className='form-control'  name='password' /> 
                <ErrorMessage name="password" />
                <Field type="email" name="email" />
                <ErrorMessage name="email" />

              </div>
            </Form>
           </Formik>

    
      //   <Formik 
      //   initialValues={initialValues}
      //   validationSchema={validationSchema}
      //   onSubmit={onSubmit} >
      //   <h1>Formik</h1>
      //   <Form>
      //  <div className='form-control'>
      //  <label htmlFor='name'>Name</label>
      //   <Field type="text" className='' id="name" name='name'/>
        
      //   <ErrorMessage name="name" />
      //   </div>
      //   <br/>
      //   <div className='form-control'>
      //   <label htmlFor='email'>email</label>
      //   <Field type="email" className='' id="email" name='email' />
      //   <ErrorMessage name="email" />
      //   </div>
       
      //   <br/>
      //  <div className='form-control'>
      //  <label htmlFor='number' >Number</label>
      //   <Field type="number" className='' id='number' name='number'/>
      //   <ErrorMessage name='number' />
      //   </div>
      //    <br/>
      //   <button type='submit'>submit</button>
      //   </Form>
      //   </Formik>
        
    
  )
}

export default Formiklist