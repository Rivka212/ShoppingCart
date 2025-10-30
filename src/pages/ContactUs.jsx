import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export function ContactUs() {
    return (
        <section className="contact">
            <h2>CONTACT US </h2>
            <div className="contact-info">
                <p><strong>Email:</strong> officeCart@example.com</p>
                <p><strong>Phone:</strong> 050-1234567</p>
                <p><strong>Address:</strong> Jerusalem, Israel</p>
            </div>

            <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="facebook">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="instagram">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
            </div>
        </section>
    )
}