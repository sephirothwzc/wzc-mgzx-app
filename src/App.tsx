import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import hello, { post, appUserAll } from './apis/lambda';
import { useImmer } from 'use-immer';
import { AppUserEntity } from './apis/lib/model/app-user.entity';

function App() {
  const [message, setMessage] = useState('');
  const [appUser, setAppUser] = useImmer<Array<AppUserEntity>>([]);

  useEffect(() => {
    hello().then((response) => setMessage(response.message));
    appUserAll('1').then((result) => setAppUser((draft) => result));
  }, [setAppUser, setMessage]);

  const handleClick = async () => {
    const message = window.prompt('Type message!');
    const response = await post(message);
    alert(JSON.stringify(response, null, 2));
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Message from ./apis/lambda: {message}</p>
        <p>
          <button onClick={handleClick}>Send message to backend</button>
        </p>
        <p>
          <a
            className="App-link"
            href="https://www.yuque.com/midwayjs/faas/hooks"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Midway Hooks
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Docs
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        {JSON.stringify(appUser)}
      </header>
    </div>
  );
}

export default App;
