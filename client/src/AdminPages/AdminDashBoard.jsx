import axios from "axios"
import { useEffect, useState } from "react"

const AdminDashBoard = () =>{
    const [seller,setSeller] = useState([])
    const [Customer,setCustomer] = useState([])
    const [error,setError] = useState(true)
    const fetchSeller = async () =>{
        try{
       const response = await axios.get('http://localhost:5000/admin/table');
       setSeller(response.data.results)
        }catch (err){
       setError(response.data.message)
        }
    }

  const fetchCustomerTable = async () =>{
    try{
  const response = await axios.get('http://localhost:5000/admin/CustomerTable');
   setCustomer(response.data.data)
    }catch (err){
  setError(response.data.message)
    }
  }



    useEffect(() =>{
    fetchSeller()
    fetchCustomerTable()
    },[])



    return(
        <>
        <div class="container mt-3">
  <h2>Seller Account Table</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Full Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Contact</th>
      </tr>
    </thead>
    <tbody>
    {seller.map((product) =>(
    <tr>
    <td>{product.FullName}</td>
    <td> {product.Age} </td>
    <td> {product.Address} </td>
    <td> {product.Contact} </td>
  </tr>
    ))} 
     
    </tbody>
  </table>
</div>



<div class="container mt-3">
  <h2>Customer Account Table</h2>
  <table class="table table-striped">
    <thead>
      <tr>
        <th>username</th>
       
      </tr>
    </thead>
    <tbody>
    {Customer.map((customers) =>(
    <tr>
    <td>{customers.username}</td>
   
  </tr>
    ))} 
     
    </tbody>
  </table>
</div>
        </>
    )
}
export default AdminDashBoard