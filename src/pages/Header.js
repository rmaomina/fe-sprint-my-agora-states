import './Header.css';

function Header() {
  return (
    <section className="header">
      <h1 className="header__title">My Agora States</h1>
      <div className="header__today"></div>
      <div className="dark-mode"><button className="darkmode__btn"></button></div>
    </section>
  );
}

export default Header;
