import { Link } from "react-router-dom";

const Support = () => {
   return(
    <>
    <section className="container p-5 text-center ">
      <div className="row">
         <div className="col-md-6">
         <div className="">
            <h1 className="">Support</h1>
            <p>We provide a wide range of support services.</p>
            <p>Including online, email and 1-800 number support. Technical support by email and telephone is provided to users creating premium libraries.</p>
            <Link to="/SignIn" className="btn btn-primary">Start Now</Link>
         </div>
         </div>
         <div className="col-md-6">
            <img src="/Support.jpg"></img>
         </div>
      </div>
    </section>

    <section className="p-5">
      <div className="container">
         <div className="row">
            <div className="col-md-6">
              <h3> <i class="bi bi-book-half text-primary"></i> Getting Started Guide</h3>
              <p>If you are new to Book Store, we suggest you download the 
               'Getting Started Guide', which will take you through the initial functions of the service.</p>
            </div>
            <div className="col-md-6">
               <h3><i class="bi bi-envelope-arrow-up text-primary"></i> Support by Email</h3>
               <p>Email is the preferred method for receiving support as information can be exchanged in written form.
                   Users with active Premium Libraries can email to ask our technical support group a question:</p>
            </div>
         </div>

         <div className="row py-5">
            <div className="col-md-6">
               <h3><i class="bi bi-telephone-fill text-primary"></i> Telephone Support</h3>
               <p>Book Store telephone support lines are staffed by experts who take great pride in helping you accomplish your goals.
               Telephone support for customers with active Premium libraries is available from 7:00AM to 5:00PM PST Monday through Friday.</p>
            </div>
            <div className="col-md-6">
               <h3> <i class="bi bi-shop text-primary"></i>  LibraryWorld Market</h3>
               <p>Book Store provides a short list of important library supplies that are generally necessary when automating a library. Click here to view a short list of supplies</p>
            </div>
         </div>
      </div>
    </section>
    </>
   )
};

export default Support;
