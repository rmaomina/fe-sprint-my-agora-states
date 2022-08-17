import './App.css';
import { useState, useEffect } from 'react'
import Header from './pages/Header';
import Form from './pages/Form';
import Discussions from './pages/Discussions';
import Loading from './pages/components/Loading';
import Pagination from './pages/Pagination';


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [discussions, setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const BASE_URL = "http://localhost:4000"

  useEffect(() => {
    setIsLoading(true)
    fetch(`${BASE_URL}/discussions`)
      .then(res => res.json())
      .then(result => {
        setIsLoading(false)
        setDiscussions(result)
      })
  }, [])

  return (
    <div className="app" data-theme={isDarkMode?"light-mode":"dark-mode"}>
      <Header darkModeHandle={setIsDarkMode} />
      <Form />
      <section className="discussion__wrapper">
        <Pagination />
        <ul className="discussions__container">
          {isLoading?<Loading/>:<Discussions discussions={discussions}/>}
        </ul>
      </section>
    </div>
  );
}

export default App;
