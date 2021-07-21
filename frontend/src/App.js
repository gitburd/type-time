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
import Tools from "./components/tools/Tools"

function App() {
  const [text, setText] = useState({})

  // useEffect(() => {
  //   axios.get('https://turbotype.herokuapp.com/api/text').then(response => {
  //     console.log("SUCCESS", response)
  //     setText(response)
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <main>
              <Tools />
              <Test />
            </main>
          </Route>
          <Route path="/history">
            <History />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
