import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory, useParams } from "react-router-dom";

export default function Update() {
    const { _id } = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState("")
    const history = useHistory() 
    
    useEffect(() => 
    
    {
        axios.get(`http://localhost:8000/api/product/${_id}`)
            .then(res => {
                console.log(res);
                setTitle(res.data.title);
                setDescription(res.data.description);
                setPrice(res.data.price)
            })
            .catch(err => console.log(err))
    }, []);

    const onsubmithandler = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/api/product/${_id}`, 
        {
            title,
            price,
            description
        })
            .then(res => {
                console.log("&&&&&&&&")
                history.push("/")
            })
            .catch(err => console.error(err));
    }


return (
    <div>

    <div>
    <h1>Update a Product </h1>
    <form onSubmit={onsubmithandler}>
        <p>
            <label>Title</label><br/>
            <input type="text" 
            name="title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }} />
        </p>
        <p>
            <label>Price</label><br />
            <input type="number" 
            name="price"
            value={price} 
            onChange={(e) => { setPrice(e.target.value) }} />
        </p>

        <p>
        <label>Description</label><br />
        <input type="text" 
        name="description"
        value={description} 
        onChange={(e) => { setDescription(e.target.value) }} />
    </p>
        
        
        
        <input type="submit" />
    </form>
</div>
    

    </div>
)
}
