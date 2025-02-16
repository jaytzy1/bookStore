import { Link } from "react-router-dom"

function Customer(){
    return(
        <>
      <section className="p-5">
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h2 className="">Customers</h2>
                    <p className="lead">All types of libraries</p>
                    <p className="">Join the thousands of libraries that are using the power
                         of the Internet to reduce costs and provide automation solutions to their libraries.
                    </p>
                    <Link to='/signUp' className="btn btn-primary">Start Now!</Link>

                </div>
                <div className="col-md-4">
                    <img src="/Customer.jpg" className=""></img>
                </div>
            </div>
        </div>
      </section>

      <section className="p-5">
        <h3 className="text-center">OUR CUSTOMERS INCLUDE ALL TYPES OF LIBRARIES</h3>

        <div className="row text-center">
            <div className="col-md-4">
              
                    <img src="/public-library.jpg"></img>
                    <p className="">Public Library</p>
                
            </div>
            <div className="col-md-4">
                <img src="/School-library.jpg"></img>
                <p className="">School Library</p>
            </div>
            <div className="col-md-4">
                <img src="/Academic-library.jpg"></img>
                <p className="">Academic Library</p>
            </div>
        </div>
      </section>

      <section className="p-5">
      <h4 className="text-center">The librarians on the committee could not believe
         that we were able to use scanners, print labels,
          index with MARC records, and have access to all of this online!</h4>
      </section>

      <section className="">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-4">
                    <h6 className="">ALL TYPES OF LIBRARIES</h6>
                </div>
          
            <div className="col-md-4">
                <h6 className="">SCHOOL LIBRARIES</h6>
            </div>
            <div className="col-md-4">
            <h6 className="">ACADEMIC LIBRARIES</h6>

            </div>
            </div>
        </div>
      </section>
        </>
    )
}
export default Customer