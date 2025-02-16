import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SellerLogin = () =>{

  const navigate = useNavigate();

   const [FullName,setFullName] = useState('')
   const [Age,setAge] = useState('')
   const [Address,setAddress] = useState('')
   const [Contact,setContact] = useState('')
   const [Password,setPassword] = useState('')
   const [ConfirmPassword,setconfirmPassword] = useState('')

  const handleSellerSignUpSUbmit = async (e) =>{
    e.preventDefault()

    if(Password !== ConfirmPassword){
      alert('password does not match') 
      return;
    }
  
   try{
   const response = await axios.post('http://localhost:5000/Seller/SellerSignUp',{
    FullName,
    Age,
    Address,
    Contact,
    Password,
    ConfirmPassword
   })
  alert('signUp Sucessfully')
 navigate('/SellerSignIn')
   }catch{
  alert('error creating account plss try again')
   }
  }

    return(
        <>
      <section className="p-5" >
        <div className="container">
            <div className="row">
                <div className="col-md-5 text-primary ms-3 py-5">
                    <h3 className="">Book Store Marketplace</h3>
                    <h1>Grow your business and Sell more</h1>
                 
                 <div className="py-4">
                 <h5 className="text-dark"><i class="text-primary bi bi-shop py-5">&nbsp; &nbsp; </i>Leading e-commerce platform in Philippines</h5>                
                 </div>

                 <div className="py-4">
                 <h5 className="text-dark"><i class="text-primary bi bi-archive py-5">&nbsp; &nbsp; </i>Growing global presence</h5>                
                 </div>
                 
                 <div className="py-4">
                 <h5 className="text-dark"><i class="text-primary  bi bi-hand-thumbs-up py-5">&nbsp; &nbsp; </i>shopping app for both iOS and Android in the Philippines</h5>                
                 </div>
                   
                </div>

                <div className="col-md-6 ms-5">
                    <div className="card shadow">
                        <h3 className="card-title text-center ">SignUp</h3>
                        <div className="card-body">
                            <div className="p-2">
                                <form onSubmit={handleSellerSignUpSUbmit}>
                                    <label className="form-label">Full Name</label>
                                    <input  
                                     className="form-control shadow"
                                     value={FullName}
                                     onChange={(e) => setFullName(e.target.value)}
                                     placeholder="Full Name"
                                     required
                                     >

                                     </input>


                                    <label className="form-label">Age</label>
                                    <input 
                                    className="form-control shadow"
                                    type="text"
                                    value={Age}
                                    onChange={(e) => setAge(e.target.value)}
                                    placeholder="Age"
                                    required
                                    ></input>

                                    <label className="form-label">Address</label>
                                    <input 
                                    className="form-control shadow"
                                    type="text"
                                    value={Address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    placeholder="Address"
                                    required
                                    ></input>

                                    <label className="form-label">Contact</label>
                                    <input 
                                    className="form-control shadow"
                                    type="text"
                                    value={Contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    placeholder="Contact"
                                    required
                                    ></input>

                                      <label className="form-label">Password</label>
                                    <input 
                                    className="form-control shadow"
                                    type="password"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                    required
                                    >
                                    </input>

                                    <label className="form-label"> </label>
                                    <input 
                                    className="form-control shadow"
                                    placeholder="Confirm Password"
                                    value={ConfirmPassword}
                                    onChange={(e) => setconfirmPassword(e.target.value)}
                                    type="password"
                                    required
                                    >
                                    
                                    </input>


                                  
                                   <div className="text-center p-2">
                                    <button className="btn btn-primary px-5">Sign Up</button>
                                   </div>

                                   <div className=" text-center">
                                     <Link className="text-decoration-none" to='/SellerSignIn'>Already have an account?</Link>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
        </>
    )
}
export default SellerLogin