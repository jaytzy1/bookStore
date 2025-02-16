import { useState, useEffect } from "react";
import axios from 'axios';

const AddProduct = () => {
   const [descriptions, setDescription] = useState('');
   const [size, setSize] = useState('');
   const [gender, setGender] = useState('');
   const [price, setPrice] = useState('');
   const [stock, setStock] = useState('');
   const [image, setImage] = useState(null);
   const [category, setCategory] = useState('');

   // Pag-load ng draft data mula sa localStorage
   useEffect(() => {
      const savedProduct = JSON.parse(localStorage.getItem('draftProduct'));
      if (savedProduct) {
         setDescription(savedProduct.descriptions);
         setSize(savedProduct.size);
         setGender(savedProduct.gender);
         setPrice(savedProduct.price);
         setStock(savedProduct.stock);
         setCategory(savedProduct.category);
      }
   }, []);

   // Pag-save ng form data sa localStorage tuwing magbabago ang input
   useEffect(() => {
      const productData = {
         descriptions,
         size,
         gender,
         price,
         stock,
         category,
      };
      localStorage.setItem('draftProduct', JSON.stringify(productData));
   }, [descriptions, size, gender, price, stock, category]);

   const handleAddProductSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('authToken');
      if (!token) {
         console.error('No token found!');
         return;
      }

      const formData = new FormData();
      formData.append('descriptions', descriptions);
      formData.append('size', size);
      formData.append('gender', gender);
      formData.append('price', price);
      formData.append('stock', stock);
      formData.append('category', category);
      formData.append('image', image); // Add image file

      try {
         const response = await axios.post('http://localhost:5000/ProductRoutes/uploads', formData, {
            headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'multipart/form-data'
            }
         });
         alert('Add Product Successfully');
         // Clear the draft from localStorage after successful submission
         localStorage.removeItem('draftProduct');
      } catch (err) {
         alert('Error adding product');
         console.log(err);
      }
   };

   // Function para i-handle ang image upload
   const handleImageChange = (event) => {
      const file = event.target.files[0]; // Kunin ang unang file
      if (file) {
         setImage(file); // I-set ang file object sa state
      }
   };

   return (
      <>
         <nav className="navbar navbar-expand-md bg-white navbar-white">
            <div className="container shadow">
               <h4 className="px-2">Add Product</h4>
               <div className="row py-2 me-auto">
                  <div className="col-md-12">
                    {/*
                     <div className="input-group">
                        <span className="input-group-text"><i className="bi bi-search"></i></span>
                        <input className="form-control " placeholder="Search...."></input>
                        <button className="input-group-text">Search</button>
                     </div>
                    */}
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-3"></div>
                  <div className="col-md-3"></div>
               </div>
            </div>
         </nav>

         <section className="p-1">
            <div className="container">
               <div className="row">
                  <div className="col-md-7">
                     <h3 className="py-5">Add New Product</h3>
                     <h5 className="">General Information</h5>
                     <form className="form-group">
                        <label className="form-label">Description Product</label>
                        <textarea 
                           className="form-control py-2"
                           placeholder="Descriptions...."
                           value={descriptions}
                           onChange={(e) => setDescription(e.target.value)}
                           required
                        ></textarea>

                        <div className="row p-2">
                           <div className="col-md-6">
                              <label className="form-label">Size</label>
                              <input 
                                 className="form-control"
                                 value={size}
                                 onChange={(e) => setSize(e.target.value)}
                                 placeholder="Size..."
                                 required
                              />
                           </div>
                           <div className="col-md-6">
                              <label className="form-label">Publisher</label>
                              <input 
                                 className="form-control"
                                 placeholder="Publisher..."
                                 value={gender}
                                 onChange={(e) => setGender(e.target.value)}
                                 required
                              />
                           </div>
                        </div>

                        <div className="row p-3">
                           <h3 className="">Pricing And Stock</h3>
                           <div className="col-md-6">
                              <label className="form-label">Base Pricing</label>
                              <input 
                                 className="form-control"
                                 placeholder="Price"
                                 value={price}
                                 onChange={(e) => setPrice(e.target.value)}
                                 required
                              />
                           </div>
                           <div className="col-md-6">
                              <label className="form-label">Stock</label>
                              <input
                                 className="form-control"
                                 placeholder="Stock"
                                 value={stock}
                                 onChange={(e) => setStock(e.target.value)}
                                 required
                              />
                           </div>
                        </div>
                     </form>
                  </div>

                  <div className="col-md-5">
                     <div className="container">
                        <div className="row">
                           <div className="col-md-4">
                              <button className="btn btn-primary">Save Draft</button>
                           </div>
                           <div className="col-md-6">
                              <button className="btn btn-primary" type="submit" onClick={handleAddProductSubmit}>Add Product</button>
                           </div>

                           <form className="form-group m-3">
                              <input className="form-control my-3" type="file" onChange={handleImageChange} required />
                              {image && <img src={URL.createObjectURL(image)} style={{ width: '250px' }} alt="Upload Image" />}
                           </form>

                           <div>
                              <h3>Category</h3>
                              <label className="form-label">Product Category</label>
                              <input 
                                 className="form-control" 
                                 type="text" 
                                 placeholder="Category"
                                 value={category}
                                 onChange={(e) => setCategory(e.target.value)}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AddProduct;
