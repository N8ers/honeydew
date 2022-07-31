import { collection, getDocs } from "firebase/firestore"
import { onAuthStateChanged } from "firebase/auth"

import { store } from "./store/store"
import { db, auth } from "./firebase-config"
import { setListItems, setLoading, setUser } from "./store/actions"

export const getListData = async () => {
  try {
    const firebaseDataCollectionRef = collection(db, "lists")
    const data = await getDocs(firebaseDataCollectionRef)
    const formattedData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))
    store.dispatch(setListItems(formattedData))
  } catch (error) {
    console.log("error ", error)
  } finally {
    console.log("finally")
  }
}

export const authStatus = async () => {
  store.dispatch(setLoading(true))

  onAuthStateChanged(auth, (user) => {
    if (user !== null) {
      store.dispatch(setUser(user))
    } else {
      store.dispatch(setUser({}))
    }

    store.dispatch(setLoading(false))
  })
}
