import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Navbar from "./components/navbar/Navbar"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from "./components/test/Test"
import Timer from "./components/tools/Timer"
import Help from "./components/tools/Help"
import WPM from "./components/tools/WPM"
import History from './components/history/History';

function App() {
  const [text, setText] = useState({})

  useEffect(() => {
    axios.get('https://turbotype.herokuapp.com/api/text').then(response => {
      console.log("SUCCESS", response)
      setText(response)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Switch>
            <Route exact path="/">
              <section className="tools">
                <Help />
                <Timer />
                <WPM />
              </section>
              <Test />
              {/* <div>{text.status === 200 ?
                <h3>{text.data && text.data.length > 0 && (
                  text.data.map((t) => <p key={t.id}>{t.content}</p>)
                )}</h3>
                :
                <h3>LOADING</h3>}</div> */}
            </Route>
            <Route path="/history">
              <History />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
