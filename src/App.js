import React, { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ListContainer from "./components/pages/List/ListContainer/ListContainer.js"
import ListsContainer from "./components/pages/Lists/ListsContainer/ListsContainer"
import FriendsContainer from "./components/pages/Friends/FriendsContainer/FriendsContainer"
import Profile from "./components/pages/Profile/Profile/Profile"

import ProtectedRoute from "./components/utils/ProtectedRoute"
import LoadingSpinner from "./components/utils/LoadingSpinner"

import Main from "./layouts/Main"
import Auth from "./layouts/Auth"
import PageNotFound from "./layouts/PageNotFound"

import { authStatus } from "./firebase-queries"

function App() {
  useEffect(() => {
    authStatus()
  }, [])

  return (
    <BrowserRouter>
      <LoadingSpinner />

      <Routes>
        <Route path="/" element={<Auth />}></Route>

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        >
          <Route path="/lists" element={<ListsContainer />} />
          <Route
            path="/lists/:id"
            element={<ListContainer title="grocery list" />}
          />
          <Route path="/friends" element={<FriendsContainer />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
