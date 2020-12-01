import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './App.css';

import Header from './components/Header';
import Navbar from './components/Navbar';
//import Carousel from './components/Carousel';
import HeadlinePosts from './components/HeadlinePosts';

function App() {

  const [countryCd, setCountryCd] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res1 = await axios.get("http://ip-api.com/json");
      setCountryCd(res1.data.countryCode)
      console.log(countryCd);
      const url = 'http://newsapi.org/v2/top-headlines?' +
                  `country=${countryCd}&` +
                  'apiKey=a48cfcb6549847c285555f8d280213b9';
      const res2 = await axios.get(url);
      setArticles(res2.data.articles);
      setLoading(false);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div class="container">
      <Header />
      <Navbar />
      <br />
      <HeadlinePosts articles={articles.slice(0,3)} loading={loading}/>
    </div>
  );
}

export default App;
