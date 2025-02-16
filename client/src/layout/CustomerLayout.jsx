import { Outlet } from "react-router-dom"
import CustomerHeader from "../components/CustomerHeader"
import { Link } from "react-router-dom"
const CustomerLayout = () =>{
    const HandleSignOutSubmit = () =>{
        localStorage.removeItem('authToken')
      }
    
        return(
            <>
          <div className="container-fluid ">
      <div className="row">
        <div className="bg-white shadow col-md-2 col-sm-2 d-flex flex-column min-vh-100 " style={{ position: "sticky", top: "0", zIndex: "1020" }} > 
          <h1 className="text-center">Book Store</h1>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to='/CustomerProduct' className="nav-link text-dark">
                <i className="bi bi-house-check-fill me-1"></i> For You
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/CustomerAddProduct' className="nav-link text-dark">
                <i className="bi bi-tag-fill me-1"></i> Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/CustomerCheckOut" className="nav-link text-dark">
                <i className="bi bi-graph-up-arrow me-1"></i> Check Out
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/ToReceiveCustomer" className="nav-link text-dark">
                <i className="bi bi-cash-coin me-1"></i> To Receive
              </Link>
            </li>
              {/*
              
            <li className="nav-item">
              <Link to="/ToReceiveCustomer" className="nav-link text-dark">
                <i className="bi bi-people-fill me-1"></i>
              </Link>
            </li>
               */}

          </ul>
          <div className="" style={{marginTop:'250px'}}>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to='/Settings' className="nav-link text-dark">
                  <i className="bi bi-gear-fill"></i> Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link to='/HelpCenter' className="nav-link text-dark">
                  <i className="bi bi-patch-question-fill"></i> Help Center
                </Link>
              </li>
              <li className="nav-item">
                <a
                  to="/SellerSignIn"
                  className="nav-link text-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#signOut"
                >
                  <i className="bi bi-box-arrow-in-right me-1"></i> Sign Out
                </a>
              </li>
            </ul>
          </div>
        </div>
         
        <div className="col-md-10 col-sm-10">
        
         <Outlet/>
        </div>
      </div>
    
      <div className="modal" id="signOut">
        <div className="modal-dialog">
          <div className="modal-content">
    
            <div className="modal-header">
              <h4 className="modal-title">Sign Out</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
    
            <div class="modal-body">
            Are You Sure you want to log Out?
          </div>
    
          <div class="modal-footer">
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
            <Link to='/SignIn' onClick={HandleSignOutSubmit} className="btn btn-danger">Sign Out</Link>
          </div>
          </div>
        </div>
      </div>
    </div>
    



         </>  
        )
    }

export default CustomerLayout