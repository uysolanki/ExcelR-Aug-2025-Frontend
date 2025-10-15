import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { validateProduct } from '../validation/ProductValidation.js'
import { useFormik } from 'formik';


const AddProduct1 = () => {
    let navigate = useNavigate()
    let p1 = {
        title: '',
        price: 0.0,
        description: '',
        category: '',
        image: ''
    }

    const {
        errors,
        values, // Changed 'value' to 'values'
        touched,
        handleBlur,
        handleSubmit,
        handleChange,
    } = useFormik({
        initialValues: p1,  // Correctly set initialValues
        validationSchema: validateProduct,
        onSubmit: function (e) {
            //e.preventDefault();
            saveData();
        },
    });

    async function saveData() {
        try {
            const response = await fetch('http://localhost:8087/products/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values)  // Use 'values' here instead of 'product'
            });

            if (response.ok) {
                const data = await response.json();
                alert("Product Added successfully!");
                console.log(data);
            } else {
                alert("Failed to Add Product");
            }
        } catch (error) {
            console.error("Error submitting the form", error);
        }

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
                        onBlur={handleBlur}
                        value={values.title}
                    />
                    {errors.title && touched.title && (<p className="text-danger">{errors.title}</p>)}
                </div>
                <div className="form-group">
                    <label htmlFor="prodDescription">Product Description</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prodDescription"
                        name="description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description} />
                    {errors.description && touched.description && (
                        <p className="text-danger">{errors.description}</p>
                    )}

                </div>
                <div className="form-group">
                    <label htmlFor="prodPrice">Product Price</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prodPrice"
                        name="price"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.price} />
                    {errors.price && touched.price && (
                        <p className="text-danger">{errors.price}</p>
                    )}

                </div>
                <div className="form-group">
                    <label htmlFor="prodCategory">Product Category</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prodCategory"
                        name="category"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.category} />
                    {errors.category && touched.category && (
                        <p className="text-danger">{errors.category}</p>
                    )}

                </div>
                <div className="form-group">
                    <label htmlFor="prodImage">Product Image</label>
                    <input
                        type="text"
                        className="form-control"
                        id="prodImage"
                        name="image"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.image} />
                    {errors.image && touched.image && (
                        <p className="text-danger">{errors.image}</p>
                    )}

                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default AddProduct1