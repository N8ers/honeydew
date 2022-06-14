import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Button } from "@mui/material";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer.js";
import Counter from "./components/Counter";
import Main from "./pages/Main";

import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <h1 className={styles.title}>honeydew</h1>
      <div>
        <Link to={"/"}>
          <Button variant="contained">home</Button>
        </Link>
        <Link to={"/counter"}>
          <Button variant="contained">Counter</Button>
        </Link>
        <Link to={"/details/2"}>
          <Button variant="contained">Details/2</Button>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/lists" element={<div>list of lists</div>} />
          <Route
            path="/lists/:id"
            element={<TodoContainer title="grocery list" />}
          />
        </Route>
        <Route path="/counter" element={<Counter />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
