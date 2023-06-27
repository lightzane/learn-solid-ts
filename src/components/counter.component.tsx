import { createEffect, createSignal, onCleanup } from 'solid-js';
import styles from './counter.module.css';

// ! If `props` will be added, NEVER deconstructure the prop
// This will enable Solid to detect the changes

export default function CounterComponent() {
  // count (Accessor) -> will be called as a function to get the value
  const [count, setCount] = createSignal(0); // handle state

  // Unlike React, `Solid` only renders the components once,
  // and only memorize part that are reactive
  const interval = setInterval(() => setCount((prev) => prev + 1), 1000);
  console.log('This executes only once!');

  // Creates a reactive computation that runs after the render phase
  // Executes whenever the "memorized" reactive "Accessor" value changed
  createEffect(() => {
    console.log(`Count has been changed to: ${count()}`);
  });

  onCleanup(() => clearInterval(interval));

  const add10 = (): void => {
    setCount((prev) => prev + 10);
  };

  return (
    <>
      <div class={styles.counter}>Count: {count()}</div>
      <button class={styles.btnCounter} onClick={add10}>
        Add 10
      </button>
      <code class={styles.text}>See also console</code>
    </>
  );
}
