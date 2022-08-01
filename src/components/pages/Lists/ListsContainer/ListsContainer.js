import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { IconButton } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"

import ListPreview from "../ListPreview/ListPreview"

import { createList } from "../../../../store/actions"

import { getListData } from "../../../../firebase-queries"

import styles from "./ListsContainer.module.css"

function ListsContainer() {
  const listsFromStore = useSelector((state) => state.lists)
  const [lists, setLists] = useState(listsFromStore)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    getListData()
  }, [])

  useEffect(() => {
    setLists(listsFromStore)
  }, [listsFromStore])

  const handleCratingList = async () => {
    const { id } = await dispatch(createList())
    navigate(`/lists/${id}`)
  }

  return (
    <div>
      <h1>Lists</h1>

      <IconButton aria-label="delete" size="large" onClick={handleCratingList}>
        <Add fontSize="inherit" />
      </IconButton>

      <div className={styles.cardContainer}>
        {lists.map((list) => (
          <ListPreview
            key={list.id}
            id={list.id}
            title={list.title}
            tasks={list.tasks}
            invitedFriends={list.invitedFriends}
          />
        ))}
      </div>
    </div>
  )
}

export default ListsContainer
