import React from 'react';
import './Footer.style.css'

import fairlogo from "../../../src/image/fair-wear-logo.png";

import socialicon1 from "../../../src/image/facebook.png";
import socialicon2 from "../../../src/image/twitter.png";
import socialicon3 from "../../../src/image/instagram.png";
import socialicon4 from "../../../src/image/youtube.png";

const Footer = () => {
    return (
        <div className='footer-area'>
            <div className='container'>
                <div className=' footer-header'>
                    <div className='col-md-6'>
                        <div className='fair-logo'>
                            <img src={fairlogo} />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='fair-logo-text'>
                            <h3>Fair Wear Leader</h3>
                        </div>
                    </div>
                </div>


{/* Accordian */}



                <div className='footer-middle'>
                    <div className='col-md-4'>
                        <div className='support'>
                            <h3>Support</h3>
                            <ul>
                                <a href='#'><li>Returns & exchange</li></a>
                                <a href='#'><li>Customization services</li></a>
                                <a href='#'><li>FAQ</li></a>
                                <a href='#'><li>All support</li></a>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='contact'>
                            <h3>Contact</h3>
                            <span className='contact1'>WhatsApp: +31 655 110 516</span> <br /> <br />
                            <span className='contact1'>Phone: +31 20 795 6685</span> <br /> <br />
                            <span className='contact1'>Email: service@suitsupply.com</span>
                        </div>
                    </div>
                    <div className='col-md-4'>
                    <div className='about'>
                            <h3>About</h3>
                            <ul>
                            <a href='#'><li>our Story</li></a>
                            <a href='#'><li>Press</li></a>
                            <a href='#'><li>Careers</li></a>
                            <a href='#'><li>Corporate service</li></a>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='footer-bottom'>
                    <div className='footer-social-icons'>
                    <img src={socialicon1} />
                    <img src={socialicon2} />
                    <img src={socialicon3} />
                    <img src={socialicon4} />
                    </div>
                </div>
            </div>



{/* Accordian */}



            
            <div className='terms'>
               <a href='#'><span>Terms and Condition</span> </a>
            </div>
        </div>
    );
};

export default Footer;