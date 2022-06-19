import { BrowserRouter, Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

import ListContainer from "./components/pages/List/ListContainer/ListContainer.js";
import Counter from "./components/pages/Counter/Counter/Counter";
import ListsContainer from "./components/pages/Lists/ListsContainer/ListsContainer";

import Main from "./layouts/Main";
import Auth from "./layouts/Auth";
import PageNotFound from "./layouts/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.links}></div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/lists" element={<ListsContainer />} />
          <Route
            path="/lists/:id"
            element={<ListContainer title="grocery list" />}
          />
          <Route path="/counter" element={<Counter />} />
        </Route>
        <Route path="/auth" element={<Auth />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
