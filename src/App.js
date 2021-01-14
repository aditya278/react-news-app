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
  const [topic, setTopic] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setTopic('');
        const res = await axios.get("http://ip-api.com/json");
        setCountryCd(res.data.countryCode);

        if (countryCd !== "") {
          const url =
            "http://api.mediastack.com/v1/news?" +
            `access_key=${process.env.REACT_APP_API_ACCESS_KEY}&` +
            `countries=${countryCd}&languages=en`;
          const res2 = await axios.get(url);

          setArticles(res2.data.data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryCd]);

  const onTopicSelection = async (newTopic) => {
    try {
      setLoading(true);
      setTopic(newTopic);
      const url =
      "http://api.mediastack.com/v1/news?" +
      `access_key=${process.env.REACT_APP_API_ACCESS_KEY}&` +
      `countries=${countryCd}&languages=en&` +
      `keywords=${newTopic}`;
      const res2 = await axios.get(url);

      setArticles(res2.data.data);
      setLoading(false);
    }
    catch(err) {
      console.log(err.message); 
    }
  }

  return (
    <Router>
      <div className="container">
        <Header topic = {topic} onTopicSelection = {onTopicSelection} />
        <Navbar onTopicSelection = {onTopicSelection} />
        <hr />
        <Switch>
          <Route exact path="/">
            <HeadlinePosts articles={articles} loading={loading} topic={topic} />
          </Route>
        </Switch>
        <hr />
        <div className="card">
          <div class="card-footer bg-light text-muted row flex-nowrap justify-content-between align-items-center">
            <div>© <a href="https://github.com/aditya278/">Aditya Shukla</a></div>
            <div>Source: <a href="https://mediastack.com/quickstart">Mediastack API</a></div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
