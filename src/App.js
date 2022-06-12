import * as React from "react";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer.js";

function App() {
  return (
    <div>
      <h1 className={styles.title}>honeydew</h1>
      <TodoContainer title="grocery list" />
    </div>
  );
}

export default App;
