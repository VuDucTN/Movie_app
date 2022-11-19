import React from 'react';

import './footer.scss';
import footer from '../../assets/footer-bg.jpg'
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <div className=''>
            <div>
                <span class='logo_footer'>
                    <img src={logo} alt="" />
                </span>
                <img src={footer} alt="" />
            </div>
        </div>
    );
}

export default Footer;
