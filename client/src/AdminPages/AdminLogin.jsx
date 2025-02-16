import axios from "axios";
import { useState } from "react"
import { Link, useAsyncError, useNavigate } from "react-router-dom"

const AdminLogin = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const navigate = useNavigate();

    const handleAdminSignUpSubmit = async (e) =>{
        e.preventDefault()

        try{
            const response = await axios.post('http://localhost:5000/admin/SignUp',{
           username,
           password,
           confirmPassword
            })
            console.log('sign Up Sucessfully')
            alert("sign Up Sucessfully")
            useNavigate('/AdminSignIn')
        }catch (err){
            console.error('error sign Up',err)
        }
    }
    return(
        <>
        <section className="p-5">
       <Link to='/signIn'><i class="bi bi-arrow-bar-left fs-5"></i></Link> 

            <div className="container">
                <div className="row justify-content-center ">
                    <div className="col-md-5 ">
                        <div className="card">
                            <h1 className="card-title text-center text-danger">Admin User</h1>
                            <div className="card-body">
                                <div className="">
                                    <form className="" onSubmit={handleAdminSignUpSubmit}>
                                        <div className="mb-3 shadow">
                                            <label className="form-label">Username</label>
                                            <input 
                                            className="form-control"
                                            placeholder="Username"
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                            ></input>
                                        </div>

                                        <div className="mb-3 shadow">
                                            <label className="input-label">Password</label>
                                            <input 
                                            className="form-control"
                                            placeholder="Password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            ></input>
                                        </div>

                                        
                                        <div className="mb-3 shadow">
                                            <label className="input-label">Confirm Password</label>
                                            <input 
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            required        
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}                                    
                                            ></input>
                                        </div>
                                        <div className="text-center">
                                        <button className="btn btn-primary px-5" type="submit">Sign Up</button>
                                        </div>
                                        <div className="text-center">
                                            <Link to='/AdminSignIn' className="nav-link"><span>You Have an Account?</span>Sign In</Link>
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
export default AdminLogin