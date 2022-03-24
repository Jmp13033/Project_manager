import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"
export default function Product() {
    const [products, setProducts] = useState([])
    useEffect(() => 
    {
        axios.get("http://localhost:8000/api/product")
        .then(response => {
            setProducts(response.data)
        
        })
        .catch( err => console.log("oops",err))

        

    },[])

    const onDeleteHandler = (_id) =>{
        

        axios.delete(`http://localhost:8000/api/product/${_id}`)
            .then(res=>{

                // const copyState = [...products];
                // copyState.splice(arrIndex, 1)
                // setProducts(copyState);
                setProducts(products.filter(product => product._id != _id))
                console.log("i am here ")
            })
            .catch(err=>
                console.log(err.response))
    }
    
    return (
    
        <div>

        <ul>
        {
            products.map((item,i) => {
                return (
                    <div>
                    <Link to={`/product/${item._id}`}> <h1 key = {i}>{item.title} {item.price} {item.description}</h1> </Link>
                        <button onClick= { e =>{onDeleteHandler(item._id)}}>delete</button>
                        <button> <Link to={`/product/${item._id}/update`}>edit</Link> </button>
                        <button> <Link to="/product/create">Create</Link> </button>
                    
                        </div>
                    )

            
            })
            
            
        } 
        </ul>

        
        

        
        
        
        
        </div>
    
    

    
    )


}
