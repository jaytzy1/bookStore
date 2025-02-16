import { Outlet } from "react-router-dom"
import FirstHeader from "../components/FirstHeader"
const FirstLayout = () =>{
    return(
        <>
       <FirstHeader/>
       <Outlet/>
        </>
    )
}
export default FirstLayout