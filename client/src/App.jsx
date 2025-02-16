import { Navigate, Route,Routes } from "react-router-dom"
import Firstlayout from "./layout/Firstlayout"
import Customer from "./pages/Customer"
import Solution from "./pages/Solution"
import Support from "./pages/Support"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Product from "./pages/Product"
import SellerSignUp from "./SellerPages/SellerSignUp"
import SellerSignIn from "./SellerPages/SellerSignIn"
import SellerLayout from "./layout/SellerLayout"
import SellerProduct from "./SellerPages/SellerProduct"
import AddProduct from "./SellerPages/AddProduct"
import DetailProduct from "./SellerPages/detailsProduct"
import CustomerLayout from "./layout/CustomerLayout"
import CustomerProduct from "./CustomerPage/CustomerProduct"
import CustomerProductDetail from "./CustomerPage/CustomerProductDetail"
import CustomerAddProduct from "./CustomerPage/CustomerAddproduct"
import CustomerCheckOut from "./CustomerPage/CustomerCheckOut"
import SuccessFullyAdded from "./CustomerPage/SucessFullyAdded"
import ToReceiveCustomer from "./CustomerPage/ToReceiveCustomer"
import Example from "./CustomerPage/example"
import AllProductSeller from "./SellerPages/AllProductSeller"
import AllProductDetail from "./SellerPages/AllProductDetail"
import HelpCenter from "./pages/helpCenter"
import Settings from "./pages/Settings"
import SellerSettings from "./SellerPages/SellerSettings"
import SellerHelpCenter from "./SellerPages/SellerHelpcenter"
import AdminLayout from "./layout/AdminLayout"
import AdminLogin from "./AdminPages/AdminLogin"
import AdminSignIn from "./AdminPages/AdminSignIn"
import AdminHomeLayout from "./layout/AdminHomeLayout"
import AdminHeader from "./components/AdminHeader"
import AdminDashBoard from "./AdminPages/AdminDashBoard"

function App (){
  return(
    <>
   <Routes>
    //firstlayout
     <Route path="/"  element={<Firstlayout/>}> 
     <Route path="/" element={<Customer/>}/>
     <Route path="/SellerSignUp" element={<SellerSignUp/>}/>
     <Route path="/SellerSignIn" element={<SellerSignIn/>}/>
     <Route path="/solution" element={<Solution/>}/>
     <Route path="/support" element={<Support/>}></Route>s
     <Route path="/signIn" element={<SignIn/>}></Route>
     <Route path="/signUp" element={<SignUp/>}/>
    

   
    </Route>

    //customerlayout
    <Route path="/" element={<CustomerLayout/>}>
    <Route path="/product" element={<Product/>}/>
    <Route path="/CustomerProduct" element={<CustomerProduct/>}/>
    <Route path="/CustomerProductDetail/:id" element={<CustomerProductDetail/>}/>
    <Route path="/CustomerAddProduct" element={<CustomerAddProduct/>} />
    <Route path="/CustomerCheckOut" element={<CustomerCheckOut/>}/>
    <Route path="/SucessFullyAdded" element={<SuccessFullyAdded/>}/>
    <Route path="/ToReceiveCustomer" element={<ToReceiveCustomer/>}/>
    <Route path="HelpCenter" element={<HelpCenter/>}/>
    <Route path="/Settings" element={<Settings/>}/>
    </Route>
   
  //sellerlayout
    <Route path="/" element={<SellerLayout/>}>
    <Route path="/SellerProduct" element={<SellerProduct/>}/>
    <Route path="/AddProduct" element={<AddProduct/>}/>
    <Route path="/DetailProduct/:id" element={<DetailProduct/>}/>
    <Route path="/AllProductSeller" element={<AllProductSeller/>}/>
    <Route path="/AllProductDetail/:id" element={<AllProductDetail/>}/>
    <Route path="/SellerSettings" element={<SellerSettings/>}/>
    <Route path="/SellerhelpCenter" element={<SellerHelpCenter/>} />

    </Route>
  
    <Route path="/" element={<AdminLayout/>}>
    <Route path="/AdminLogin" element={<AdminLogin/>} />
    <Route path="/AdminSignIn" element={<AdminSignIn/>} />
    </Route>

    <Route path="/" element={<AdminHomeLayout/>}>
    <Route path="/AdminDashBoard" element={<AdminDashBoard/>}/>
    </Route>
   </Routes>
  
    </>
  )
}
export default App