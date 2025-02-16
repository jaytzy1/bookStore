import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const AdminSignIn = () => {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleAdminSigninSubmit = async (e) =>{
        e.preventDefault()

        try{
          const response = await axios.get('http://localhost:5000/admin/SignIn',{
           params:{
           username,
           password
           }
          })
          alert('sign In sucessfully')
          navigate('/AdminDashBoard')
        }catch (err){
            alert('error sign in',err)
        }
    }
    return(
        <>
        <section className="p-5">
       <Link to='/signIn'><i class="bi bi-arrow-bar-left fs-5"></i></Link> 

            <div className="container">
                <div>
                </div>
                <div className="row justify-content-center ">
                    <div className="col-md-5 ">
                        <div className="card">
                            <h1 className="card-title text-center text-danger">Admin User</h1>
                            <div className="card-body">
                                <div className="">
                                    <form className="" onSubmit={handleAdminSigninSubmit}>
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
                                            type="password"
                                            ></input>
                                        </div>

                                        <div className="text-center">
                                        <button className="btn btn-primary px-5" type="submit">Sign In</button>
                                        </div>
                                        <div className="text-center">
                                            <Link to='/AdminLogIn' className="nav-link"><span>You don't have an Account?</span>Sign In</Link>
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
export default AdminSignIn