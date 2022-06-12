import * as React from "react";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer.js";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <h1 className={styles.title}>honeydew</h1>
      <Counter />
      <TodoContainer title="grocery list" />
    </div>
  );
}

export default App;
