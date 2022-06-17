import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer/TodoContainer.js";
import Counter from "./components/Counter/Counter";
import ListsContainer from "./components/ListContainer/ListsContainer";
import Main from "./layouts/Main";
import Auth from "./layouts/Auth";

import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.links}></div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/lists" element={<ListsContainer />} />
          <Route
            path="/lists/:id"
            element={<TodoContainer title="grocery list" />}
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="/details/:id" element={<Details />} />
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
