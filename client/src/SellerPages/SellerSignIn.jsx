import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const SellerSignIn = () =>{

    const navigate = useNavigate()
   const [Contact,setContact] = useState('')
   const [Password,setPassword] = useState('')

   const handleSellerSignInSubmit = async (e) =>{
    e.preventDefault();
   
   try{
    const response = await axios.get('http://localhost:5000/Seller/SellerSignIn',{
    params:{
        Contact,
        Password
    }
    })
    const token = response.data.token;
    localStorage.setItem('authToken', token);
    alert('Sign Up Sucessfully')
   navigate('/SellerProduct')
   }catch{
   alert('cannot sign In, please try again')
   }
   }

    return(
        <>
        <div className="p-5">
            <div className="container">
                <div className="row ">

                    <div className="col-md-4" style={{marginTop: '70px'}}>
                        <h1 className="text-primary">Be a Power Seller</h1>
                        <h4 className="lead"> Manage your shop efficiently on Bookstore with our Bookstore Seller Centre</h4>
                        <div className="text-center">
                        <img src="/Seller-bookstore.jpg"/>
                        </div>
                    </div>
 
                    <div className="col-md-6 p-5">
                      <div className="card shadow ">
                        <h1 className="card-title text-center">Sign In</h1>
                        <div className="card-body">
                            <form onSubmit={handleSellerSignInSubmit}>
                               
                               <div className="p-2 ">
                                <label className="form-label">Contact</label>
                                <input 
                                className="form-control shadow"
                                value={Contact}
                                onChange={(e) => setContact(e.target.value)}
                                placeholder="Contact"
                                type="text"
                                required
                                ></input>
                                </div>

                                <div className="p-2">
                                <label className="form-label">Password</label>
                                <input 
                                className="form-control shadow"
                                value={Password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                type="password"
                                required
                                ></input>
                                </div>
                               
                               <div className="p-2 text-center ">
                                <button className="btn btn-primary px-5">Sign In</button>
                               </div>

                               <div className="p-2 text-center">
                                <Link 
                                to='/SellerSignUp' 
                                className="text-decoration-none text-dark">You don't have an Account? 
                                <span className="text-primary">Sign Up </span></Link>
                               </div>
                            </form> 
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default SellerSignIn