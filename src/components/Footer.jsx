import React from 'react';
import '../assets/Footer.css'; // Assuming you have a separate CSS file for Footer styling

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-content'>
                <div className='contact-info'>
                    <h3>Contact Us</h3>
                    <p><strong>Phone:</strong> +91 123 456 7890</p>
                    <p><strong>Email:</strong> info@lizacreation.com</p>
                    <p><strong>Address:</strong> 123, XYZ Road, Patna, Bihar, India</p>
                </div>
                <div className='map'>
                    <h3>Our Location</h3>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.608920890242!2d85.07596357655368!3d25.61790847744254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed57dcc5400e67%3A0x412744d32892c6ea!2sLiza%20Creations!5e0!3m2!1sen!2sin!4v1732701686731!5m2!1sen!2sin" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Liza Creation Boutique. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
