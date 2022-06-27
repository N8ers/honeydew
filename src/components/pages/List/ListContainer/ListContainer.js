import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { Paper, Input, Button, Autocomplete, TextField } from "@mui/material"

import {
  getListById,
  updateListTitle,
  createListItem,
} from "../../../../store/actions"

import styles from "./ListContainer.module.css"

import ListItems from "../ListItems/ListItems"
import NewListItem from "../NewListItem/NewListItem"

function ListContainer() {
  const params = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const listDataFromState = useSelector((state) => state.selectedList)
  const friendDataFromState = useSelector((state) => state.friends)

  const [title, setTitle] = useState([])
  const [listItems, setListItems] = useState([])
  const [id, setId] = useState(0)
  const [invitedFriends, setInvitedFriends] = useState([])

  const handleGetListById = async () => {
    const result = await dispatch(getListById(params.id))

    if (!result) {
      navigate("/lists", { replace: true })
    }
  }

  useEffect(() => {
    handleGetListById()
  }, [])

  useEffect(() => {
    setTitle(listDataFromState.title)
    setListItems(listDataFromState.tasks)
    setId(listDataFromState.id)
    setInvitedFriends(listDataFromState.invitedFriends)
  }, [listDataFromState])

  const handleAddingListItem = async (newItem) => {
    const item = { listId: listDataFromState.id, title: newItem }
    dispatch(createListItem(item))
  }

  const saveTitle = () => {
    if (listDataFromState.title !== title) {
      dispatch(updateListTitle(id, title))
    }
  }

  const handleInvitedCollaboratorChange = (value) => {
    console.log("event ", value.target.value)
  }

  return (
    <Paper elevation={3} className={styles.container}>
      <Input
        fullWidth
        variant="standard"
        onBlur={saveTitle}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <ListItems listItems={listItems} listId={id} />
      <NewListItem addListItem={handleAddingListItem} />

      <hr />

      <div>
        <div>
          <h4>Collaborators</h4>
          <ul>
            {invitedFriends.map((friend) => (
              <li key={friend.id}>{friend.username}</li>
            ))}
          </ul>
        </div>

        <Autocomplete
          multiple
          id="tags-standard"
          options={friendDataFromState}
          getOptionLabel={(option) => option.username}
          defaultValue={[]}
          onChange={handleInvitedCollaboratorChange}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="standard"
              label="Multiple values"
              placeholder="Favorites"
            />
          )}
        />

        <hr />

        <Link to={"/friends"}>
          <Button>Invite a new collaborator!</Button>
        </Link>
      </div>
    </Paper>
  )
}

export default ListContainer
