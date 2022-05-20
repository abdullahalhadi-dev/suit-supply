import React from "react";
import "./Service.style.css";

import item1 from "../../../src/image/service1.svg";
import item2 from "../../../src/image/service2.svg";

const Service = () => {
  return (
    <div className="service-area">
      <div className="section-services text-center">
        <p className="service-title mb-5 px-2">
          Don’t just fit in,
          <br />
          <strong>find your own perfect fit</strong>
        </p>

        <div class="row container-fluid container-services">
          <div className="col-md-6">
            <div className="item1">
              <div className="item1-image">
                <img src={item1} />
              </div>

              <div className="item1-text">
              <h4>Alter Your Fit</h4>
                <p>
                  Shorten, lengthen, taper and more, done by our in-store expert
                  tailors.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="item2">
              <div className="item2-image">
                <img src={item2} />
              </div>

              <div className="item2-text">
                <h4>Design Your Own</h4>
                <p>
                Create your own Custom Made piece from scratch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
