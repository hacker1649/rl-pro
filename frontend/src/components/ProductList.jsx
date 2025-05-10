import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [selectProductToView, setSelectProductToView] = useState([]);
  const [selectProductToDelete, setSelectProductToDelete] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/product')
      .then(res => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
      });
  }, []);

  const handleConfirmDelete = () => {
    if (!selectProductToDelete) return;
  
    axios
      .delete(`http://127.0.0.1:8000/api/product/${selectProductToDelete.id}`)
      .then((res) => {
          console.log(res.data);
          // Reload the page after successful deactivation
          window.location.reload();
      })
      .catch(err => {
        console.error('Error deactivating product:', err);
      });
  };

  return (
    <div className="container pt-4">
      <div className="card p-4 shadow-sm">
        <div className="card-header bg-transparent d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold">Products</h5>
          <button className="btn btn-dark btn-sm" onClick={() => navigate('/add-product')}>Add New</button>
        </div>
        <div className="card-body pt-3">
          <table className="small table table-bordered table-striped table-sm mb-0">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Product Description</th>
                <th>Product Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 ? (
                products.map(prod => (
                  <tr key={prod.id} className="align-middle">
                    <td>{prod.id}</td>
                    <td>
                      <div style={{ width: '250px' }} className="text-truncate">{prod.name}</div>
                    </td>
                    <td>
                      <div style={{ width: '600px' }} className="text-truncate">{prod.desc}</div>
                    </td>
                    <td>${prod.price}</td>
                    <td>
                      <div className="dropdown">
                        <button className="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                          Action
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <li>
                            <button 
                              className="dropdown-item text-info small"
                              data-bs-toggle="modal"
                              data-bs-target="#viewModal"
                              onClick={() => setSelectProductToView(prod)} 
                            >View</button>
                          </li>
                          <li>
                            <button 
                              className="dropdown-item text-warning small"
                              onClick={() => navigate(`/edit-product/${prod.id}`, { state: { product: prod } })}
                            >Edit</button>
                          </li>
                          <li>
                            <button 
                              className="dropdown-item text-danger small"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteModal"
                              onClick={() => setSelectProductToDelete(prod)} 
                            >Delete</button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center text-muted">No products found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* View Modal */}
      <div className="modal fade" id="viewModal" tabIndex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content small">
            <div className="modal-header">
              <h5 className="modal-title" id="viewModalLabel">Product Details</h5>
            </div>
            {selectProductToView && (
              <div className="modal-body">
                <p><strong>Product Name:</strong> {selectProductToView.name}</p>
                <p><strong>Product Description:</strong> {selectProductToView.desc}</p>
                <p><strong>Product Price:</strong> ${selectProductToView.price}</p>
              </div>
            )}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

       {/* Delete Modal */}
       <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content small">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Warning?</h5>
            </div>
            {selectProductToDelete && (
              <div className="modal-body">
                <span>Are you sure you want to delete the product <strong>{selectProductToDelete?.name}</strong>?</span>
              </div>
            )}
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-sm" data-bs-dismiss="modal">Close</button>
              <button className="btn btn-danger btn-sm" onClick={handleConfirmDelete}>Confirm</button>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
}

export default ProductList;
