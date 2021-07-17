import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [getMessage, setGetMessage] = useState({})
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
    <div className="App">
      <header className="App-header">
        <p>React + Flask App</p>
        <div>{text.status === 200 ?
          <h3>{text.data && text.data.length > 0 && (
            text.data.map((t) => <p key={t.id}>{t.content}</p>)
          )}</h3>
          :
          <h3>LOADING</h3>}</div>
      </header>
    </div>
  );
}

export default App;
