import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) return toast.error("All fields are required.");

    try {
      const { data } = await axios.get('http://localhost:5000/userlogin/SignIn', {
        params: { username, password }
      });

      toast.success('Sign In successful!', { position: "top-center" });
      setTimeout(() => navigate('/CustomerProduct'), 1500);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Error signing in';
      setError(errorMessage);
      toast.error(errorMessage, { position: "top-center" });
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar />
      <div className="p-5 container">
        <h1 className="text-center text-primary">Book Store</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-sm-9">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title text-center">Sign In</h2>
                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSigninSubmit}>
                  <div className="mb-2">
                    <label className="form-label">Username</label>
                    <input
                      className="form-control shadow"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      required
                    />
                  </div>

                  <div className="mb-2">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control shadow"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-primary px-5">Log in</button>
                  </div>

                  <div className="text-center mt-3">
                    <Link className="text-decoration-none" to='/signUp'>Sign Up for Book Store?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
