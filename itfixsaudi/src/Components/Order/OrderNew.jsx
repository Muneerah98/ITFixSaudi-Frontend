import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router'


export default function OrderNew(props) {
// state of Order
const [order, setOrder] = useState({});
const [toNext, setToNext] = useState(false)

const handleChange = (e) => {
    let name = e.target.name
    let value = e.target.value
    setOrder({ ...order, [name]: value })
  }

const handleSubmit = (e) => {

    e.preventDefault();
    console.log(order)
    axios.post('http://localhost:4000/api/v1/order/new',order)
      .then((data) => {
        console.log(data)
        setToNext(true)
      })
      .catch(err => {
        console.log(err.response)
      })
  }


return (
    <div>     

<form  onSubmit={(e) => handleSubmit(e)}>
     <h1>Create An Order</h1>


       <label>Title</label>
        <div><input
         type='text'
         placeholder="Enter a title of order "
         name="title"
         onChange={(e) => handleChange(e)}
       /></div>

         <label>DeviceType</label>
         <br/>
         <select name="deviceType" onChange={(e) => handleChange(e)}>
           <option >Choose a device</option>
           <option value="Computer">Computer</option>
           <option value="Phone">Phone</option>
         </select>
          <br/>

         <label>software Type</label>
         <br/>
         <select name="softwareType" onChange={(e) => handleChange(e)}>
           <option >Choose a software</option>
           <option value="IOS">IOS</option>
           <option value="Android">Android </option>
           <option value="IOS">MAC</option>
           <option value="Android">Windows </option>
         </select>
         <br/>

       <label>Description</label>
        <div><input 
         type='text'
         placeholder="Enter description of order "
         name="description"
         onChange={(e) => handleChange(e)}
         /></div>

        <label>Attachment</label>
        <div><input 
         type='text'
         placeholder="Upload Image or Video "
         name="attachment"
         onChange={(e) => handleChange(e)}
          /></div>
       
         <label>Phone Number</label>
          <div><input 
           placeholder="Enter your Phone Number"
           name="phoneNumber"
           onChange={(e) => handleChange(e)}
         /></div>

       <button type="submit" > Submit </button>
       
       </form>
     {toNext ? <Redirect to="/Order" />: null}

    </div>

)
}
