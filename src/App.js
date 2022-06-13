import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import styles from "./App.module.css";

import TodoContainer from "./components/TodoContainer.js";
import Counter from "./components/Counter";

import Details from "./Details";

function App() {
  return (
    <BrowserRouter>
      <h1 className={styles.title}>honeydew</h1>
      <div>
        <button>
          <Link to={"/counter"}>Counter</Link>
        </button>
        <button>
          <Link to={"/details/2"}>Details/2</Link>
        </button>
        <button>
          <Link to={"/lists"}>lists</Link>
        </button>
        <button>
          <Link to={"/lists/2"}>lists/2</Link>
        </button>
      </div>
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/lists" element={<div>list of lists</div>} />
        <Route
          path="/lists/:id"
          element={<TodoContainer title="grocery list" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
