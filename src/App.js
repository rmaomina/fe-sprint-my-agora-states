import './App.css';
import { useState } from 'react'
import Header from './pages/Header';
import Form from './pages/Form';
import Discussions from './pages/Discussions';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className="app" data-theme={isDarkMode?"light-mode":"dark-mode"}>
      <Header darkModeHandle={setIsDarkMode} />
      <Form />
      <Discussions />
    </div>
  );
}

export default App;
