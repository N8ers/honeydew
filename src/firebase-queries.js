import { collection, getDocs } from "firebase/firestore"

import { store } from "./store/store"
import { db } from "./firebase-config"
import { setListItems } from "./store/actions"

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
