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
    const fetchData = async () => {
      const data = await fetch(`${BASE_URL}/discussions`).then(res => res.json())
      setDiscussions(data)
    }
    fetchData().catch(console.error)
    setIsLoading(false)
  }, [])

  return (
    <main data-theme={isDarkMode?"dark-mode":"light-mode"}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Form />
      <section className="discussion__wrapper">
        <Pagination />
        <ul className="discussions__container">
          {isLoading?<Loading/>:<Discussions discussions={discussions}/>}
        </ul>
      </section>
    </main>
  );
}

export default App;
