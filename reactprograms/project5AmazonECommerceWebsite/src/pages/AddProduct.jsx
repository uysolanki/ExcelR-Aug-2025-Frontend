import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddProduct = () => {

    let navigate=useNavigate()

    let [p1,setP1] = useState({
        title: '',
        price: 0.0,
        description: '',
        category: '',
        image: ''
    })

    function handleChange(e)
    {
        p1 = {...p1,[e.target.name]:e.target.value}
        setP1(p1)
        console.log(p1)
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        axios.post('http://localhost:8087/products/addProduct',p1)
        .then(result=> console.log(result))

        alert('Product Added')
        navigate('/shop')

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="prodTitle">Product Title</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="prodTitle" 
                    name="title"
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="prodDescription">Product Description</label>
                    <input 
                    type="text"
                    className="form-control" 
                    id="prodDescription"
                    name="description" 
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="prodPrice">Product Price</label>
                    <input 
                    type="text"
                    className="form-control" 
                    id="prodPrice" 
                    name="price"
                    onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="prodCategory">Product Category</label>
                    <input 
                    type="text"
                    className="form-control" 
                    id="prodCategory"
                    name="category"
                    onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="prodImage">Product Image</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    id="prodImage"
                    name="image"
                    onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddProduct