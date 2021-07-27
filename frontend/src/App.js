import React, { useState, useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import './App.css';
import Navbar from "./components/navbar/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Test from "./components/test/Test";
import History from './components/history/History';
import Tools from "./components/tools/Tools";
import Settings from "./components/tools/Settings";
import Achievements from "./components/history/Achievements";
import DeleteTestRecord from "./components/tools/DeleteTestRecord"
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from './components/theme/GlobalStyles';
import { useTheme } from './components/theme/useTheme';
import { selectTheme } from "./store/actions/themeActions";

function App() {
  const {
    themes,
    selectedTheme
  } = useSelector(state => ({
    themes: state.theme.themes,
    selectedTheme: state.theme.selectedTheme
  }), shallowEqual);

  const dispatch = useDispatch();

  const [showSettings, setShowSettings] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const toggleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  const toggleShowDelete = () => {
    setShowDelete(!showDelete)
  }

  const { theme, themeLoaded } = useTheme();

  const setSelectedTheme = (theme) => {
    dispatch(selectTheme(theme))
  }

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);


  return (
    <>
      {
        themeLoaded && <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Router>
            <div>
              <Switch>
                <Route exact path="/">
                  <main>
                    <div className="left">
                      <Navbar toggleShowSettings={toggleShowSettings} />
                      {showSettings &&
                        <Settings setShowSettings={setShowSettings}
                        />}
                      <Tools />
                    </div>
                    <Test />
                  </main>
                </Route>
                <Route path="/history">
                  <main>
                    <div className="left">
                      <Navbar toggleShowSettings={toggleShowSettings} />
                      {showSettings &&
                        <Settings setShowSettings={setShowSettings}
                        />}
                      <DeleteTestRecord toggleShowDelete={toggleShowDelete} />
                      <Achievements />
                    </div>
                    <History showDelete={showDelete} setShowDelete={setShowDelete} />
                  </main>
                </Route>
              </Switch>
            </div>
          </Router>
        </ThemeProvider>
      }
    </>
  );
}

export default App;
