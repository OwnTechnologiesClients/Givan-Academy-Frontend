import React from "react";
import "./demo.scss";
import Banner3 from "../../assets/banner3.png";
import { Link } from "react-router-dom";
const Demo = () => {
  return (
    <div className="demo">
      <div class="form-details ">
        <div className="head">
          <h1>Start Free Trial</h1>
        </div>

        <form>
          <label>First Name</label>
          <br />
          <input type="text" name="first_name" />
        </form>

        <form>
          <label>Phone Number</label>
          <br />
          <input type="text" name="phone_number" />
        </form>

        <form>
          <label>Tuition Class For</label>
          <br />
          <input type="text" name="tuition_class" />
        </form>

        <Link to="/">
          <div className="butt">Free Trial &gt;</div>
        </Link>
      </div>

      <div className="banner-part-3">
        <img src={Banner3} alt="" />
      </div>
    </div>
  );
};

export default Demo;
