import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios.post('http://127.0.0.1:8000/api/product', formData)
            .then(res => {
                console.log(res.data);
                setFormData({ name: '', desc: '', price: '' }); // Clear form
                // Redirect to product list page
                navigate('/');
            })
            .catch(err => {
                console.error(err);
            });
    };

    return (
        <div className="container pt-4 d-flex justify-content-center">
            <div className="card p-4 shadow-sm" style={{ width: '1000px' }}>
                <div className="card-header bg-transparent">
                    <h5 className="m-0 fw-bold">Add New Product</h5>
                </div>
                <div className="card-body">
                    <form className="small" onSubmit={handleSubmit}>
                        <div className="form-group row mb-3">
                            <label className="col-sm-3 col-form-label">Product Name</label>
                            <div class="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-sm-3 col-form-label">Product Description</label>
                            <div class="col-sm-9">
                                <textarea
                                    className="form-control form-control-sm"
                                    rows={4}
                                    name="desc"
                                    value={formData.desc}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-sm-3 col-form-label">Product Price</label>
                            <div class="col-sm-9">
                                <input
                                    type="number"
                                    step="0.01" // allows decimals like 12.50, 99.99, etc.
                                    className="form-control form-control-sm"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-group row mb-3">
                            <label className="col-sm-3 col-form-label"></label>
                            <div class="col-sm-9">
                                <button type="submit" className="btn btn-sm btn-dark">Add Product</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;
