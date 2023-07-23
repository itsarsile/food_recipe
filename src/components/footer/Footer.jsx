import React from 'react';
import Style from './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="bg-warning">
        <div className="container pt-5 pb-2" style={{color: '#2E266F'}} id="footerStyle">
          <div className="text-center">
            <h1 className={Style} id="footer">
              Eat, Cook, Repeat
            </h1>
            <h5 id="footer">Share your best recipe by uploading here !</h5>
          </div>{' '}
          <ul class="footerList d-flex justify-content-center pt-5 pl-2" style={{listStyle: 'none', display: 'flex'}}>
            <li className="pr-3">Product</li>
            <li className="pr-3">Company</li>
            <li className="pr-3">Learn More</li>
            <li className="pr-3">Get in Touch</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Footer;
