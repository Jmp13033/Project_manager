import React, { useEffect, useState} from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import axios from "axios"

export default function Show(props) {
    const [products, setProducts] = useState({})
    const {_id} = useParams();
    const history  = useHistory();



    useEffect(()=> {
        axios.get("http://localhost:8000/api/product/"+ _id)
        .then(res =>{
            console.log(res)
            setProducts(res.data)
        
        })
        .catch(err => console.log(err))


    }, [_id])
return (
    <div>{products.title}
    {products.price}
    {products.description}
    
    </div>
)
}

