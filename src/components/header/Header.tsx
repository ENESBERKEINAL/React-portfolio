import "./Header.css";

export default function Header() {
  return (
    <div className="header-wrapper">
      <div className="Header">
        <div className="Header-left clickable">{"</>"} Enes Berke İnal</div>
        <div className="Header-right">
          <div className="Header-right-experience clickable">Experience</div>
          <div className="Header-right-educations clickable">Educations</div>
          <div className="Header-right-skills clickable">Skills</div>
          <div className="Header-right-contact clickable">Contact</div>
        </div>
      </div>
    </div>
  );
}
