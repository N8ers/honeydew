import React from "react"
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

function App() {
  return (
    <BrowserRouter>
      <LoadingSpinner />

      <Routes>
        <Route path="/" element={<Auth />}></Route>

        <Route path="/" element={<Main />}>
          <Route
            path="/lists"
            element={
              <ProtectedRoute>
                <ListsContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/lists/:id"
            element={
              <ProtectedRoute>
                <ListContainer title="grocery list" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/friends"
            element={
              <ProtectedRoute>
                <FriendsContainer />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
