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
import Settings from "./components/tools/Settings"

function App() {
  const [text, setText] = useState({})

  const [showSettings, setShowSettings] = useState(false);

  const toggleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  const toolComponent = showSettings ? <Settings setShowSettings={setShowSettings} /> : <Tools />
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <main>
              <div>
                <Navbar toggleShowSettings={toggleShowSettings} />
                {/* {toolComponent} */}
                {showSettings &&
                  <Settings setShowSettings={setShowSettings}
                  />}
                <Tools />
              </div>
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
