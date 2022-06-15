import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer.js";
import Counter from "./components/Counter";
import Main from "./pages/Main";

import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.links}></div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/lists" element={<div>list of lists</div>} />
          <Route
            path="/lists/:id"
            element={<TodoContainer title="grocery list" />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
