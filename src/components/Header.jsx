import patternCircles from "../assets/images/pattern-circles.svg";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Simple, traffic-based pricing</h1>
      <div className="header__text">
        <p>Sign-up for our 30-day trial.</p>
        <p>No credit card required.</p>
      </div>
      <img
        className="header__circles-img"
        src={patternCircles}
        alt="Circles Icons"
      />
    </header>
  );
};
