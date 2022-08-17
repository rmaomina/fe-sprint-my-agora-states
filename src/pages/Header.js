import './Header.css';
import { useState } from 'react'

function Header({ setIsDarkMode, isDarkMode }) {

  const [currTime, setCurrTime] = useState('');

  setInterval(() => {
    let newDate = new Date;
    setCurrTime(newDate.toLocaleString())
  }, 1000)

  const darkmodeHandle = () => {
    isDarkMode?setIsDarkMode(false):setIsDarkMode(true)
  }

  return (
    <section className="header">
      <h1 className="header__title">My Agora States</h1>
      <div className="header__today">{currTime}</div>
      <div className="dark-mode"><button className="darkmode__btn" onClick={() => {darkmodeHandle()}}></button></div>
    </section>
  );
}

export default Header;
