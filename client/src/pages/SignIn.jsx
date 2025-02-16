import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSigninSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending GET request with username and password as query parameters
      const response = await axios.get('http://localhost:5000/userlogin/SignIn', {
        params: {
          username: username,
          password: password
        }
      });

      if (response.status === 200) {
        const token = 
        alert('Sign In successfully');
        navigate('/CustomerProduct');  // Redirect to the product page after successful login
      }
    } catch (error) {
      // Show the error message from the backend
      setError(error.response?.data?.message || 'Error signing in');
    }
  };

  return (
    <div className="p-5">
      <div className="container">
        <h1 className="text-center text-primary">Book Store</h1>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-6 col-md-8 col-sm-9">
            <div className="card shadow">
              <div className="card-body">
                <h2 className="card-title text-center">Sign In</h2>

                {error && <div className="alert alert-danger">{error}</div>}

                <form onSubmit={handleSigninSubmit}>
                  <div className="mb-2 shadow">
                    <label className="form-label">Username</label>
                    <input
                      className="form-control"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username"
                      required
                    />
                  </div>

                  <div className="mb-2 shadow">
                    <label className="form-label">Password</label>
                    <input
                      className="form-control"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div className="mb-2 text-center">
                    <button type="submit" className="btn btn-primary px-5">Log in</button>
                  </div>

                  <div className="mb-2 text-center">
                    <Link className="text-decoration-none" to='/signUp'>Sign Up for Book Store?</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
