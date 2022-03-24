import React, { useState } from 'react'
import axios from "axios"
import { useHistory } from 'react-router-dom'

export default function Create() {


  const [form, setForm] = useState
  ({
    "title": "",
    "price": null,
    "description":""

  })
const history = useHistory()

  const Onchangehandler = (event) => {

    setForm({...form,
      [event.target.name]:event.target.value
    })


  }

  const onsubmithandler = (event) => {
    event.preventDefault();
    console.log("submitted")
    axios.post("http://localhost:8000/api/product",form)
    .then( res => {
      history.push("/")
    })
    .catch(err => console.log())
    
    

  }
  
  
  return (
    
    
    <div>

    <form onSubmit={onsubmithandler}>
    <label>Title</label>
    <input onChange={Onchangehandler} type="text" name="title"/>
    <label> Price</label>
    <input onChange={Onchangehandler} type="number" name='price'/>
    <label> Description </label>
    <input onChange={Onchangehandler} type="text" name='description'/>

    <input type="submit"/>
    
    </form>
    
    
    
    
    
    </div>
  )
}
