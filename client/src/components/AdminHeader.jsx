import { Link } from "react-router-dom"

const AdminHeader = () =>{
    return(
        <>
        <nav className="navbar navbar-expand-md navbar-white bg-white">
            <div className="container">
                <h1>Admin</h1>
                <div className="">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link ">DashBoard</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}
export default AdminHeader