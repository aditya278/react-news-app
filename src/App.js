import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
//import Carousel from './components/Carousel';
import HeadlinePosts from "./components/HeadlinePosts";

function App() {
  const [countryCd, setCountryCd] = useState("");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const res = await axios.get("http://ip-api.com/json");
        setCountryCd(res.data.countryCode);

        if (countryCd !== "") {
          const url =
            "http://newsapi.org/v2/top-headlines?" +
            `country=${countryCd}&` +
            "apiKey=a48cfcb6549847c285555f8d280213b9";
          const res2 = await axios.get(url);

          setArticles(res2.data.articles);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCd]);

  const onTopicSelection = async (topic) => {
    try {
      setLoading(true);
      const url =
        "http://newsapi.org/v2/everything?" + 
        `q=${topic}&` + 
        "sortBy=publishedAt&apiKey=a48cfcb6549847c285555f8d280213b9";
      const res2 = await axios.get(url);

      setArticles(res2.data.articles);
      setLoading(false);
    }
    catch(err) {
      console.log(err.message); 
    }
  }

  return (
    <Router>
      <div className="container">
        <Header onTopicSelection = {onTopicSelection} />
        <Navbar onTopicSelection = {onTopicSelection} />
        <hr />
        <Switch>
          <Route exact path="/">
            <HeadlinePosts articles={articles} loading={loading} />
          </Route>
        </Switch>
        <hr />
      </div>
    </Router>
  );
}

export default App;
