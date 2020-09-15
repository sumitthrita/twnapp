import React from "react";
// import Dropdown from "./Dropdown1";
import "./BookOurServices.css";

function BookOurServices() {
  return (
    <div className="services">
      <div>
        <h2 className="heading">Book Our Services</h2>
      </div>
      <div className="dropdown">
        <form className="brands form1" action="submit">
          <div>
            <label for="cars">Vehical Brand</label>
          </div>
          <div>
            <select className="brandNames" name="cars">
              <option className="brandNames" value="volvo">
                Volvo
              </option>
              <option className="brandNames" value="saab">
                Saab
              </option>
              <option className="brandNames" value="opel">
                Opel
              </option>
              <option className="brandNames" value="audi">
                Audi
              </option>
            </select>
          </div>
        </form>

        <form className="brands form2" action="submit">
          <div>
            <label for="cars">Model Number</label>
          </div>
          <div>
            <select className="brandNames" name="cars">
              <option className="brandNames" value="volvo">
                Volvo
              </option>
              <option className="brandNames" value="saab">
                Saab
              </option>
              <option className="brandNames" value="opel">
                Opel
              </option>
              <option className="brandNames" value="audi">
                Audi
              </option>
            </select>
          </div>
        </form>
      </div>

      <div>1</div>
      <div>2</div>
    </div>
  );
}

export default BookOurServices;
