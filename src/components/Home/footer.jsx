import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="footer">
        <div className="row">
          <div className="col-lg-4">
            <img src="./images/logo2.png" alt="" className="footer__image"></img>
          </div>
          <div className="col-lg-4">
            <ul className="footer__list">
              <li className="footer__list__item">Home</li>
              <li className="footer__list__item">Service</li>
              <li className="footer__list__item">About</li>
              <li className="footer__list__item">Feedback</li>
              <li className="footer__list__item">Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h4>Follow Us</h4>
            <div>
              <i class="fab fa-facebook-f footer__icon"></i>
              <i class="fab fa-twitter footer__icon"></i>
              <i class="fab fa-instagram footer__icon"></i>
              <i class="fab fa-google-plus-g footer__icon"></i>
            </div>
          </div>
        </div>

        <div className="row footer__cpy">
            <div className="col-lg-12">
            <p>All Rights Reserved. copyright © 2021 </p>
            </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Footer;
