import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as Sentry from '@sentry/browser';


function App() {


  const foo = (): void => {
    //throw new Error('ups something is wrong');
    
    console.warn('a warning');
    console.error('ups something is wrong');
    
  }

  const obj: any = {};

  const [title, setTitle] = React.useState('initial title');

  const request = async (): Promise<any> => {
    //const url = 'https://jsonplaceholder.jhfskldjhf.typicode.com/todos/1';
    const url = 'https://jsonplaceholder.typicode.com/todosklfsldfkj/1';
    try {
      const response = await fetch(url);
      if(response.ok) {
        const json = await response.json();
        setTitle(json.title);
      } else {
        Sentry.captureException(new Error('fetch failed!'));
      }
    } catch (error) {
      Sentry.captureException(new Error(`${error} -- url=${url}`));
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{`Title: "${title}"`}</p>
        <p><button onClick={foo}>Break the world</button></p>
        <p><button onClick={()=>{obj.foo();}}>Break the world again</button></p>
        <p><button onClick={request}>Change title</button></p>
      </header>
    </div>
  );
}

export default App;
