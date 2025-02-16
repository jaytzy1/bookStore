import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllProductSeller = () =>{
    const [products, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [searchBar, setSearchBar] = useState("");

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/Customer/CustomerProduct"
      );
      setProduct(response.data.data);
    } catch {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handlleSearchBarSubmit = (e) => {
    setSearchBar(e.target.value);
  };

  const searchProduct = products.filter((product) =>
    product.descriptions.toLowerCase().includes(searchBar.toLowerCase())
  );

  const filteredProducts = products.filter((product) => product.price < 1000);

  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Overview</h3>
          </div>
          <div className="col-md-4">
            <div className="input-group">
              <input
                className="form-control"
                onChange={handlleSearchBarSubmit}
                value={searchBar}
                placeholder="Search..."
              ></input>
              <span className="input-group-text">Search</span>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <h1>
            Flash <span className="text-danger">Sale</span>
          </h1>
          {searchProduct.map((product) => (
            <div className="col-md-2 col-sm-5 py-2" key={product.id}>
              <div className="card">
                <img
                  src={product.image}
                  alt=""
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-title">
                    {product.descriptions.length > 15
                      ? product.descriptions.slice(0, 15) + "..."
                      : product.descriptions}
                  </p>
                  <div className="card-footer">
                    <h5>₱ {product.price}</h5>
                    <p className="">{product.category}</p>
                    <Link
                      to={`/AllProductDetail/${product.id}`}
                      className="btn btn-primary"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row">
          <h1>
            As low as <span className="text-danger">₱999</span>
          </h1>
          {filteredProducts.map((product) => (
            <div className="col-md-2 col-sm-5 py-2" key={product.id}>
              <div className="card">
                <img
                  src={product.image || "default-image.jpg"}
                  alt={product.descriptions || "Product Image"}
                  style={{ height: "200px" }}
                />
                <div className="card-body">
                  <p className="card-title">
                    {product.descriptions.length > 15
                      ? product.descriptions.slice(0, 15) + "..."
                      : product.descriptions}
                  </p>
                  <div className="card-footer">
                    <h5>₱ {product.price}</h5>
                    <p className="">{product.category}</p>
                    <p className="card-text">Stock: {product.stock}</p>
                    <Link
                      to={`/AllProductDetail/${product.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AllProductSeller