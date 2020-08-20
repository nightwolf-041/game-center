import React from 'react';

function Footer() {
  return (
    <footer class="footer">
      <div class="footer-logo-box">
        <img src="/page-bg-logo.png" alt="logo" class="footer-logo" />
      </div>
      <div class="footer-links">
        <a href="#" class="footer-link" id="footer-blog-section-link">
          بلاگ
        </a>
        <a href="#" class="footer-link" id="footer-games-section-link">
          بازی ها
        </a>
        <a href="#" class="footer-link" id="footer-aboutus-section-link">
          درباره ما
        </a>
        <a href="#" class="footer-link" id="footer-home-section-link">
          خانه
        </a>
      </div>
      <div class="footer-socials">
        <a href="#" class="socials-tooltip" data-title="آپارات">
          <img src="/aparat-icon-31.png" alt="" class="footer-social" />
        </a>
        <a href="#" class="socials-tooltip" data-title="twitch">
          <img src="/twitch.png" alt="" class="footer-social" />
        </a>
        <a href="#" class="socials-tooltip" data-title="اینستاگرام">
          <img src="/instagram.png" alt="" class="footer-social" />
        </a>
        <a href="#" class="socials-tooltip" data-title="تلگرام">
          <img src="/telegram.png" alt="" class="footer-social" />
        </a>
      </div>
      <div class="footer-bottom">طراحی و تنظیم توسط گروه StartDone</div>
    </footer>
  );
}

export default Footer;
