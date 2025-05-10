import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const navigate = useNavigate();
    const { id } = useParams(); // get product ID from URL
    const [formData, setFormData] = useState({
        name: '',
        desc: '',
        price: ''
    });

    // Fetch product details to pre-fill the form
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/product/${id}`)
          .then(res => setFormData(res.data))
          .catch(err => console.error('Error fetching product:', err));
      }, [id]);

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        axios.put(`http://127.0.0.1:8000/api/product/${id}`, formData)
            .then(res => {
                console.log(res.data);
                navigate('/'); // redirect after successful update
            })
            .catch(err => {
                console.error('Error updating product:', err);
            });
    };

    return (
        <div className="container pt-4 d-flex justify-content-center">
            <div className="card p-4 shadow-sm" style={{ width: '1000px' }}>
                <div className="card-header bg-transparent">
                    <h5 className="m-0 fw-bold">Edit Product</h5>
                </div>
                <div className="card-body">
                    <form className="small" onSubmit={handleSubmit}>
                        <div className="form-group row mb-3">
                            <label className="col-sm-3 col-form-label">Product Name</label>
                            <div className="col-sm-9">
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
                            <div className="col-sm-9">
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
                            <div className="col-sm-9">
                                <input
                                    type="number"
                                    step="0.01"
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
                            <div className="col-sm-9">
                                <button type="submit" className="btn btn-sm btn-primary">Save Cahnges</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProduct;
