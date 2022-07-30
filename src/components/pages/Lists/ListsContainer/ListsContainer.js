import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, IconButton } from "@mui/material"
import { Add } from "@mui/icons-material"
import { useSelector, useDispatch } from "react-redux"

import { getLists, createList } from "../../../../store/actions"

import { db } from "../../../../firebase-config"
import { collection, getDocs } from "firebase/firestore"

import styles from "./ListsContainer.module.css"

function ListsContainer() {
  /* DANGER ZONE */
  const [firebaseData, setFirebaseData] = useState([])
  const firebaseDataCollectionRef = collection(db, "lists")
  useEffect(() => {
    const getData = async () => {
      const data = await getDocs(firebaseDataCollectionRef)
      const formattedData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      console.log({ formattedData })
      setFirebaseData(formattedData)
      console.log({ firebaseData })
    }

    getData()
  }, [])
  /* DANGER ZONE */

  const listsFromStore = useSelector((state) => state.lists)
  const [lists, setLists] = useState(listsFromStore)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getLists())
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
          <Link key={list.id} to={`/lists/${list.id}`}>
            <Card varient="outlined" className={styles.card}>
              {list.title}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ListsContainer
