

import React, { useState} from 'react'
import axios from 'axios'

function ProductForm() {

    const [ title, setTitle] = useState("");
    const [ price, setPrice ] = useState();
    const [ description, setDescription ] = useState("")


    const onSubmitHandler = (e)=>{
        e.preventDefault();

        // axios call to backened
        axios.post('http://localhost:8000/api/create', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))

    }


  return (
    <div>
        <form onSubmit={onSubmitHandler}>

            <label htmlFor="title">Title</label>
            <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} />

            <label htmlFor="price">Price</label>
            <input type="text" placeholder="$10" value={price} onChange={(e)=>setPrice(e.target.value)} />

            <label htmlFor="description">Description</label>
            <input type="text" value={description} placeholder=".." onChange={(e)=>setDescription(e.target.value)} />

            <button type="submit" >Create</button>
        </form>
    </div>
  )
}

export default ProductForm;