import { Link } from "react-router-dom"

const Solution = () =>{
    return(
        <>
     <section className="p-5" id="solution">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-8">
                <h1>Solutions</h1>
                <h4>The Library Store</h4>
                <p>library provides a full range of library modules
                including catalog, circulation, inventory, serials control, and OPAC.</p>

                <Link className="btn btn-primary" to='/signUp'>Start Now!</Link>
                </div>
                <div className="col-md-4">
                    <img className="w-100" src="/Solutions.jpg"></img>
                </div>
            </div>
        </div>
     </section>

     <section className="p-5" id="catalog">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-4">
                  <img src="/catalog.jpg"></img>
                </div>
                <div className="col-md-8">
                    <h1>Catalog</h1>
                    <p className="lead">The catalog module provides for the creation and
                         updating of catalog and holding records. You can import
                          records from standard MARC format, hand enter records, or 
                          pull records from one of many online resources, including our Z39.50
                           connection to the Library of Congress. The Z39.50 protocal can also
                            be used by client applications to search your own library in a 
                            vendor independent manner
                     </p>
                     <p>The catalog module allows you to add one or more copies to specific catalog 
                        records and do basic and advanced searches. Book jacket images can be shared,
                         allowing faster and easier item identification.
                    </p>
                    <p>Each catalog can have multiple holding/copy records linked to allow true 
                        collection management features including inventory control and serials
                         tracking. You can also attach multiple jpeg or pdf files to each 
                          record and link eBooks to build a truly digital library.
                   </p>
                </div>
            </div>
        </div>
     </section>
      
     <section className="p-5" id="patron">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-8">
                <h1>Patrons</h1>
                <p className="lead">The patron module allows you to import or hand enter
                     patron records. Patron records can include an optional patron 
                      for quick user verification.
                </p>
                 <p>Items that have been checked out, reserved or placed on hold for patrons, 
                    can be checked in, checked out or cleared in the patron module. Basic and
                     advanced searching is also available.
                </p>
               <p>As in circulation, the patron module also provides a quick method to send 
                emails with a summary of the patron's transactions.
                </p>
                </div>
                <div className="col-md-4">
                    <img className="w-100" src="/patron.jpg"></img>
                </div>
            </div>
        </div>
     </section>

     <section className="p-5" id="circulation">
        <div className="container">  
            <div className="row g-3">
                <div className="col-md-4">
                  <img className="" src="/circulation.jpg"></img>
                </div>
                <div className="col-md-8">
                    <h1>Circulation</h1>
                    <p className="lead">The circulation module provides for 
                        fast check in, checkout, renew, hold, clear hold, and reserve of items for patrons.
                     </p>
                     <p>
                     Enter a patron's bar code number just once, and then check
                      out one or many items to that patron as required. Enter the next 
                      patron number and continue with that patron. With a bar code scanner
                       you rarely have to touch the keyboard. Circulation provides quick email 
                       receipts to patrons after checking items out.
                    </p>
                    <p>A new self service circulation portal is now available.
                         The feature is designed for those libraries and locations 
                         where patrons are allowed to check out and check in materials
                          at a dedicated self service station.
                          </p>
                </div>
            </div>
        </div>
     </section>

     <section className="p-5" id="serialTracking">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-8">
                <h1>Serials Tracking</h1>
                <p className="lead">The serials module allows an easy method 
                    for tracking expected repeating items.
                </p>
                <div className="col-md-4">
                    <p>Once a title is setup,
                         the next expected item is 
                          automatically after the last
                           item has been received.</p>
                </div>
                <div className="col-md-4">
                    <p>Holding items in the catalog module are automatically created 
                        after receiving a serial item.</p>
                </div>
                <div className="col-md-4">
                    <p>Missing reports and letters can be sent to
                         vendors on items that have not been received.</p>
                </div>
                </div>
                <div className="col-md-4">
                    <img className="w-100" src="/serialTracking.jpg"></img>
                </div>
            </div>
        </div>
     </section>

     <section className="p-5" id="inventory">
        <div className="container">  
            <div className="row g-3">
                <div className="col-md-4">
                  <img className="" src="/inventory.jpg"></img>
                </div>
                <div className="col-md-8">
                    <h1>Inventory</h1>
                    <p className="lead">
                    The inventory module allows you to verify the status of your collection.
                     </p>
                     <p>
                     The inventory process provides instant feedback on items that have
                      not been checked in properly. A missing items report tells 
                      you which items are missing from the shelves.
                    </p>
                   
                </div>
            </div>
        </div>
     </section>


     <section className="p-5" id="reports">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-8">
                <h1>Reports</h1>
                <p className="lead">
                LibraryWorld has a wide range of reports for each application
                </p>
                 <p>
                 From catalog reports, patron overdues, and statistical 
                 reports to library spine and pocket labels, you'll find the report you're looking for.
                </p>
              
                </div>
                <div className="col-md-4">
                    <img className="w-100" src="/report.jpg"></img>
                </div>
            </div>
        </div>
     </section>


     <section className="p-5" id="opacApps">
        <div className="container">  
            <div className="row g-3">
                <div className="col-md-4">
                  <img className="" src="/opac.jpg"></img>
                </div>
                <div className="col-md-8">
                    <h1>OPAC Apps</h1>
                    <p className="lead">
                    The Online Patron Access Catalog 
                    (OPAC) is a separate program designed specifically
                     for your patrons to search your collection.
                     </p>
                     <p>
                     It provides basic and advanced searching with multiple
                      display modes, items status and book jacket display.
                       Link directly off your own web site for a seamless 
                       transition to library searching with a return link back.
                        The user interface can be customized to even look like your site.
                    </p>
                   <p>
                   A new option has been added to link your catalog records to the Google 
                   Preview Book service, allowing summary and even content viewing of books in your collection.
                   </p>
                </div>
            </div>
        </div>
     </section>


     <section className="p-5" id="mobile">
        <div className="container">
            <div className="row g-3">
                <div className="col-md-8">
                <h1>Mobile Apps</h1>
                <p className="lead">
                LibraryWorld provides two approaches to search your collection using mobile devices.
                </p>
                 <p>
                 The first is through a Web application specifically 
                 designed with a custom user interface to allow mobile phone users easy access.
                </p>
                <p>
                The second method is through native mobile applications.
                 Currently, the LibraryWorld Mobile Search program is
                  available for Apple's iPhone and iPad and can be downloaded for free from the Apple AppStore.  
                </p>
              
                </div>
                <div className="col-md-4">
                    <img className="w-100" src="/mobile.jpg"></img>
                </div>
            </div>
        </div>
     </section>

        </>
    )
}
export default Solution