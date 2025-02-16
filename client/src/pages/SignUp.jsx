import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom"
const SignUp = () =>{

  const navigate = useNavigate()
 const [username,setUsername] = useState('');
 const [password,setPassword] = useState('');
 const [confirmPassword,setconfirmPassword] = useState('');
 
const handleSubmit = async (e) =>{
  e.preventDefault();

  if(password !== confirmPassword){
    alert("password do not match")
    return
  }

  try{
    const response = await axios.post('http://localhost:5000/userlogin/SignUp',{
      username,
      password,
      confirmPassword
    })
    alert("sign Up Sucessfully")
    navigate('/signIn')
  }catch (error){
    alert('error creating account,please try again',error)
  }
}
  return(
    <>
    <div className="p-5  ">
      <div className="container">
        <h1 className="text-center text-primary">Book Store</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-sm-9">
            <div className="card shadow">
              <div className="card-body">
               <h2 className="card-title text-center">Create new account</h2>

                <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <div className="mb-2 shadow">
                    <label form="username" className="form-label">Username</label>
                   <input 
                   type="text"
                   className="form-control"
                   value={username}
                   onChange={(e) => setUsername(e.target.value)}
                   placeholder="Username"
                   required
                   />
                  </div>

                  <div className="mb-2 shadow">
                    <label className="form-label">Password</label>
                    <input 
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    />
                  </div>

                  <div className="mb-2 shadow">
                    <label className="form-label">Confirm Password</label>
                    <input 
                    type="password"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    required
                    />
                  </div>
                </div>
                <div className="mb-2 text-center">
                  <button className="btn btn-success px-5">Sign Up</button>
                </div>

                <div className="mb-2 text-center">
                <Link className="text-decoration-none" to='/signIn'>Already Have an Account?</Link>
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
export default SignUp