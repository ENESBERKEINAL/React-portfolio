import React from "react";
import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="contact-section" id="contact">
      <div className="page-shell">
        <div className="section-label scroll-reveal reveal-from-left">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <span className="label-rule" />
        </div>
        <div className="contact-content">
          <div className="scroll-reveal reveal-from-left">
            <span className="contact-overline">{t.contact.overline}</span>
            <h2>
              {t.contact.titleLine1}
              <br />
              <span>{t.contact.titleLine2}</span>
            </h2>
          </div>
          <a
            className="contact-cta scroll-reveal reveal-from-right"
            href="https://www.linkedin.com/in/enesberkeinal/"
            target="_blank"
            rel="noreferrer"
          >
            {t.contact.cta} <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="footer-bottom">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">&lt;/&gt;</span>
            <span>Enes Berke İnal</span>
          </a>
          <div className="social-links scroll-reveal reveal-from-bottom" aria-label={t.footer.socialLabel}>
            <a href="https://www.linkedin.com/in/enesberkeinal/" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
            <a href="https://twitter.com/Smellnes" target="_blank" rel="noreferrer">X <span aria-hidden="true">↗</span></a>
            <a href="https://www.instagram.com/eberkeinal/" target="_blank" rel="noreferrer">Instagram <span aria-hidden="true">↗</span></a>
            <a href="https://www.twitch.tv/smellnes" target="_blank" rel="noreferrer">Twitch <span aria-hidden="true">↗</span></a>
            <a href="https://www.youtube.com/channel/UCk0hWste759iJdWYjL18IPw" target="_blank" rel="noreferrer">YouTube <span aria-hidden="true">↗</span></a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} · {t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
