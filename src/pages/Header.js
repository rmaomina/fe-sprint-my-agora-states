import './Header.css';

function Header({ setIsDarkMode, isDarkMode }) {

  const darkmodeHandle = () => {
    isDarkMode?setIsDarkMode(false):setIsDarkMode(true)
  }

  return (
    <section className="header">
      <h1 className="header__title">My Agora States</h1>
      <div className="header__today"></div>
      <div className="dark-mode"><button className="darkmode__btn" onClick={() => {darkmodeHandle()}}></button></div>
    </section>
  );
}

export default Header;
