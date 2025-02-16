
import { Link } from "react-router-dom";

const SellerHeader = () => {
    return(
     <>
    <div className="contianer-fluid">
        <div className="row">
            <div className="col-auto col-md-2 min-vh-100 d-flex justify-content-between flex-column bg-dark">
                <div>
                    <a className="navbar-brand align-items-center d-flex">Book Store</a>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}



    /*
    const handleSignOut = () =>{
        localStorage.removeItem('authToken')
    }
    return (
        <>
           /*  <section
                className="p-5 shadow d-flex  flex-column"
                style={{ width: 'auto', height: '100vh' }}
            >
                <div className="">
                    <h4 className="">Book Store</h4>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to='/SellerProduct' className="nav-link text-dark d-flex align-items-center">
                                <i className="bi bi-house-check-fill me-1"></i>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center">
                                <i className="bi bi-tag-fill me-1"></i>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center">
                                <i className="bi bi-graph-up-arrow me-1"></i>
                                Analytics
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center">
                                <i className="bi bi-cash-coin me-1"></i>
                                Transactions
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark d-flex align-items-center">
                                <i className="bi bi-people-fill me-1"></i>
                                Customers
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="mt-auto">
                    <ul className="nav flex-column">
                        <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link text-dark">
                                <i className="bi bi-gear-fill"></i> Settings
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <Link className="nav-link text-dark">
                                <i className="bi bi-patch-question-fill"></i> Help Center
                            </Link>
                        </li>
                        <li className="nav-item d-flex align-items-center">
                            <a to='/SellerSignIn' className="nav-link text-danger" data-bs-toggle='modal' data-bs-target='#signOut'>
                                <i className="bi bi-box-arrow-in-right me-1"></i>
                                Sign Out
                            </a>
                        </li>
                    </ul>

                  </div>
            </section>

<div class="modal fade" id="signOut">
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Sign Out</h4>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <div class="modal-body">
        Are you Sure You want To Sign Out?
      </div>

      <div class="modal-footer">
        <Link  type="button" class="btn btn-primary" data-bs-dismiss= "modal">Cancel</Link>
        <Link to='/SellerSignIn' type="button" class="btn btn-danger" onClick={handleSignOut}>Sign Out</Link>
      </div>

    </div>
  </div>
</div>
        </>

        
    );
};
*/
export default SellerHeader;
