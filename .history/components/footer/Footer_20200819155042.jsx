import React from 'react';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo-box">
        <img src="/page-bg-logo.png" alt="logo" className="footer-logo" />
      </div>
      <div className="footer-links">
        <Link
          to="blog-section"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="footer-link"
          id="footer-blog-section-link"
        >
          بلاگ
        </Link>
        <Link
          to="games-section"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="footer-link"
          id="footer-games-section-link"
        >
          بازی ها
        </Link>
        <Link
          to="make-mony"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="footer-link"
          id="footer-aboutus-section-link"
        >
          درباره ما
        </Link>
        <Link
          to="top-slider-section"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
          className="footer-link"
          id="footer-home-section-link"
        >
          خانه
        </Link>
      </div>
      <div className="footer-socials">
        <a href="#" className="socials-tooltip" data-title="آپارات">
          <img src="/aparat-icon-31.png" alt="" className="footer-social" />
        </a>
        <a href="#" className="socials-tooltip" data-title="twitch">
          <img src="/twitch.png" alt="" className="footer-social" />
        </a>
        <a href="#" className="socials-tooltip" data-title="اینستاگرام">
          <img src="/instagram.png" alt="" className="footer-social" />
        </a>
        <a href="#" className="socials-tooltip" data-title="تلگرام">
          <img src="/telegram.png" alt="" className="footer-social" />
        </a>
      </div>
      <div className="footer-bottom">طراحی و تنظیم توسط گروه StartDone</div>
    </footer>
  );
}

export default Footer;