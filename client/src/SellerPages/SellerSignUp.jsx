import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SellerLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    FullName: '',
    Age: '',
    Address: '',
    Contact: '',
    Password: '',
    ConfirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSellerSignUpSubmit = async (e) => {
    e.preventDefault();
    const { FullName, Age, Address, Contact, Password, ConfirmPassword } = formData;

    if (Password !== ConfirmPassword) {
      toast.error('⚠️ Passwords do not match!', { position: "top-center", autoClose: 2500 });
      return;
    }

    try {
      await axios.post('http://localhost:5000/Seller/SellerSignUp', formData);
      toast.success('✅ Sign Up Successful!', { position: "top-center", autoClose: 2000 });
      setTimeout(() => navigate('/SellerSignIn'), 2500);
    } catch (error) {
      toast.error('❌ Failed to create account. Try again!', { position: "top-center", autoClose: 3000 });
    }
  };

  return (
    <>
      <ToastContainer theme="colored" limit={2} />
      <section className="p-4">
        <div className="container">
          <div className="row">
            <div className="col-md-5 text-primary py-4">
              <h3>📚 Book Store Marketplace</h3>
              <h1>🚀 Grow your business and sell more</h1>
              {["🌟 Leading e-commerce platform in Philippines", "🌍 Growing global presence", "📱 Available on iOS and Android"].map((text, idx) => (
                <h5 key={idx} className="py-2">{text}</h5>
              ))}
            </div>
            <div className="col-md-6">
              <div className="card shadow-lg">
                <h2 className="card-title text-center my-3">📝 Create Your Account</h2>
                <div className="card-body">
                  <form onSubmit={handleSellerSignUpSubmit}>
                    {['FullName', 'Age', 'Address', 'Contact', 'Password', 'ConfirmPassword'].map((field) => (
                      <div key={field} className="mb-3">
                        <label className="form-label">{field.replace(/([A-Z])/g, ' $1').trim()}</label>
                        <input
                          className="form-control"
                          type={field.includes('Password') ? 'password' : 'text'}
                          name={field}
                          value={formData[field]}
                          onChange={handleChange}
                          placeholder={field.replace(/([A-Z])/g, ' $1').trim()}
                          required
                        />
                      </div>
                    ))}
                    <div className="text-center mb-3">
                      <button className="btn btn-primary px-5 py-2">🚀 Sign Up</button>
                    </div>
                    <div className="text-center">
                      <Link className="text-decoration-none" to="/SellerSignIn">Already have an account? Log in</Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SellerLogin;
