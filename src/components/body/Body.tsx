import { useEffect } from "react";
import "./Body.css";
import { useLanguage } from "../../i18n/LanguageContext";

export default function Body() {
  const { t } = useLanguage();

  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>(".scroll-reveal");

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -32px 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero page-shell" id="home" aria-labelledby="hero-title">
        <div className="hero-copy scroll-reveal reveal-from-left">
          <span className="eyebrow">{t.hero.role}</span>
          <h1 id="hero-title">
            {t.hero.titleLine1}
            <br />
            <span>{t.hero.titleLine2}</span>
            <br />
            {t.hero.titleLine3}
          </h1>
          <p className="hero-description">
            {t.hero.description}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              {t.hero.projectsCta} <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-secondary" href="#about">
              {t.hero.aboutCta}
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>{t.hero.note}</span>
          </div>
        </div>

        <div className="hero-art scroll-reveal reveal-from-right" aria-label={t.hero.visualLabel}>
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-glow" />
          <div className="art-index">EBI<span>®</span></div>
          <div className="code-card">
            <div className="code-card-top">
              <span className="window-dots"><i /><i /><i /></span>
              <span>{t.hero.codeTitle}</span>
              <span className="code-card-menu">···</span>
            </div>
            <div className="code-lines" aria-hidden="true">
              <div><span className="code-number">01</span><span className="code-purple">const</span> idea = <span className="code-green">"your vision"</span>;</div>
              <div><span className="code-number">02</span><span className="code-purple">function</span> <span className="code-blue">create</span>() {"{"}</div>
              <div><span className="code-number">03</span>&nbsp;&nbsp;<span className="code-purple">return</span> idea + <span className="code-green">" reality"</span>;</div>
              <div><span className="code-number">04</span>{"}"}</div>
            </div>
            <div className="code-card-footer">
              <span><span className="status-dot" /> {t.hero.status}</span>
              <span>{t.hero.region}</span>
            </div>
          </div>
          <div className="art-sticker">
            <span>{t.hero.crafted}</span>
            <span>{t.hero.withIntent}</span>
            <span className="sticker-star">✳</span>
          </div>
          <div className="art-caption">
            {t.hero.design} <span>×</span> {t.hero.development}
          </div>
        </div>

        <a className="scroll-cue" href="#about" aria-label={t.hero.scrollAria}>
          <span>{t.hero.scrollLabel}</span>
          <span aria-hidden="true">↓</span>
        </a>
      </section>

      <section className="about-section section-shell page-shell" id="about">
        <div className="section-label scroll-reveal reveal-from-left">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <span className="label-rule" />
        </div>
        <div className="about-content scroll-reveal reveal-from-right">
          <h2 className="section-heading">
            {t.about.titleLine1}
            <br />
            <span>{t.about.titleLine2}</span>
          </h2>
          <div className="about-details">
            <p>{t.about.body}</p>
            <a className="text-link" href="#contact">
              {t.about.cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="skills-section section-shell" id="skills">
        <div className="page-shell">
          <div className="section-label scroll-reveal reveal-from-left">
            <span className="eyebrow">{t.skills.eyebrow}</span>
            <span className="label-rule" />
          </div>
          <div className="skills-intro scroll-reveal reveal-from-right">
            <h2 className="section-heading">
              {t.skills.titleLine1}
              <br />
              <span>{t.skills.titleLine2}</span>
            </h2>
            <p>
              {t.skills.intro}
            </p>
          </div>
          <div className="skill-grid">
            <article className="skill-card scroll-reveal reveal-from-bottom">
              <span className="skill-number">01</span>
              <span className="skill-symbol symbol-react" aria-hidden="true">◎</span>
              <h3>{t.skills.frontend}</h3>
              <p>{t.skills.frontendDescription}</p>
              <div className="skill-tags"><span>React</span><span>TypeScript</span></div>
            </article>
            <article className="skill-card scroll-reveal reveal-from-bottom reveal-delay-1">
              <span className="skill-number">02</span>
              <span className="skill-symbol symbol-backend" aria-hidden="true">{"{ }"}</span>
              <h3>{t.skills.backend}</h3>
              <p>{t.skills.backendDescription}</p>
              <div className="skill-tags">
                <span>NestJS</span>
                <span>Java</span>
                <span>Go</span>
                <span>API</span>
              </div>
            </article>
            <article className="skill-card skill-card-note scroll-reveal reveal-from-bottom reveal-delay-2">
              <span className="skill-number">03</span>
              <span className="skill-symbol symbol-craft" aria-hidden="true">✳</span>
              <h3>{t.skills.product}</h3>
              <p>{t.skills.productDescription}</p>
              <span className="card-bottom-note">{t.skills.productNote}</span>
            </article>
          </div>
        </div>
      </section>

      <section className="projects-section section-shell page-shell" id="projects">
        <div className="section-label scroll-reveal reveal-from-left">
          <span className="eyebrow">{t.projects.eyebrow}</span>
          <span className="label-rule" />
        </div>
        <div className="projects-heading scroll-reveal reveal-from-right">
          <h2 className="section-heading">
            {t.projects.titleLine1}
            <br />
            <span>{t.projects.titleLine2}</span>
          </h2>
          <span className="project-count">{t.projects.count}</span>
        </div>
        <div className="projects-empty">
          <div className="empty-art scroll-reveal reveal-from-left" aria-hidden="true">
            <span className="empty-square square-one" />
            <span className="empty-square square-two" />
            <span className="empty-square square-three">+</span>
            <span className="empty-orbit" />
          </div>
          <div className="empty-copy scroll-reveal reveal-from-right">
            <span className="empty-index">{t.projects.emptyLabel}</span>
            <h3>
              {t.projects.emptyTitleLine1}
              <br />
              {t.projects.emptyTitleLine2}
            </h3>
            <p>{t.projects.emptyDescription}</p>
            <a className="text-link" href="#contact">
              {t.projects.cta} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
