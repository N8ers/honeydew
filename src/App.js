import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ListContainer from "./components/pages/List/ListContainer/ListContainer.js"
import Counter from "./components/pages/Counter/Counter/Counter"
import ListsContainer from "./components/pages/Lists/ListsContainer/ListsContainer"
import FriendsContainer from "./components/pages/Friends/FriendsContainer/FriendsContainer"

import Main from "./layouts/Main"
import Auth from "./layouts/Auth"
import PageNotFound from "./layouts/PageNotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/lists" element={<ListsContainer />} />
          <Route
            path="/lists/:id"
            element={<ListContainer title="grocery list" />}
          />
          <Route path="/friends" element={<FriendsContainer />} />
          <Route path="/counter" element={<Counter />} />
        </Route>
        <Route path="/auth" element={<Auth />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
