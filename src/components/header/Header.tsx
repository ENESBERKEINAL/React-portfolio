import "./Header.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Header() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <a className="brand" href="#home" aria-label={t.header.homeLabel}>
          <span className="brand-mark">&lt;/&gt;</span>
          <span>Enes Berke İnal</span>
        </a>
        <nav className="site-nav" aria-label={t.header.navLabel}>
          <a href="#about">{t.header.about}</a>
          <a href="#experience">{t.header.experience}</a>
          <a href="#skills">{t.header.skills}</a>
          <a href="#projects">{t.header.projects}</a>
        </nav>
        <div className="header-actions">
          <div className="language-switch" role="group" aria-label={t.header.languageLabel}>
            <button
              type="button"
              className={language === "tr" ? "language-option is-active" : "language-option"}
              aria-label={t.header.languageTurkish}
              aria-pressed={language === "tr"}
              onClick={() => setLanguage("tr")}
            >
              TR
            </button>
            <button
              type="button"
              className={language === "en" ? "language-option is-active" : "language-option"}
              aria-label={t.header.languageEnglish}
              aria-pressed={language === "en"}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
          <a className="header-contact" href="#contact">
            {t.header.contact} <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
