import {  FaWhatsapp,FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
    return (
 <footer className="footer" id="contact">
<div className="footer-container">
 <div className="footer-brand">
  <h2><span>T</span> Talora</h2>
 <p> Gələcəyini bizimlə qur!  Bilik qazan, təcrübə əldə et və inkişaf et.</p>
                </div>

                <div className="footer-links">
                    <h3>Sürətli keçidlər</h3>
                    <a href="#home">Ana səhifə</a>
                    <a href="#about">Haqqimizda</a>
                    <a href="#program">Proqram</a>
                    <a href="#contact">Əlaqə</a>
                </div>
<div className="footer-social">
                    <h3>Bizi izləyin</h3>
                     <div className="social-icons">
                        <a href="https://wa.me/994XXXXXXXXX" target="_blank" aria-label="WhatsApp">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.facebook.com/username/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebook />
                        </a>
                        <a href="https://www.instagram.com/username/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Talora. Bütün hüquqlar qorunur.</p>
            </div>
        </footer>
    );
}

export default Footer;
