import { Outlet } from "react-router-dom"
import AdminHeader from "../components/AdminHeader"

const AdminHomeLayout = () =>{
    return(
        <>
        <AdminHeader/>
        <Outlet/>
        </>
    )
}
export default AdminHomeLayout