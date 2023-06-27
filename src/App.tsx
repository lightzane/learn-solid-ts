import type { Component } from 'solid-js';

import styles from './App.module.css';
import logo from './logo.svg';
import CounterComponent from './components/counter.component';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt='logo' />
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          class={styles.link}
          href='https://github.com/solidjs/solid'
          target='_blank'
          rel='noopener noreferrer'>
          Learn Solid
        </a> */}
        <CounterComponent />
      </header>
    </div>
  );
};

export default App;
