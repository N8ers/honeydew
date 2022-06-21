import { Checkbox, IconButton, ListItem, Input } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import PropTypes from "prop-types"

import { updateListItem, deleteListItem } from "../../../../store/actions"

function ItemContainer(props) {
  const { title, listId, id, completed } = props

  const [stateTitle, setTitle] = useState("")
  const dispatch = useDispatch()

  useEffect(() => {
    setTitle(title)
  }, [])

  const saveTitle = () => {
    dispatch(updateListItem({ listId: listId, id: id, title }))
  }

  const toggleCompleted = (completed) => {
    dispatch(updateListItem({ listId: listId, id: id, completed }))
  }

  const deleteItem = () => {
    dispatch(deleteListItem({ listId: listId, id: id }))
  }

  return (
    <ListItem key={id}>
      <Checkbox
        checked={completed}
        onChange={(event) => toggleCompleted(event.target.checked)}
      />
      <Input
        fullWidth
        variant="standard"
        onBlur={saveTitle}
        value={stateTitle}
        onChange={(event) => setTitle(event.target.value)}
      />
      <IconButton edge="end" aria-label="delete" onClick={() => deleteItem()}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  )
}

ItemContainer.propTypes = {
  title: PropTypes.string,
  listId: PropTypes.number,
  id: PropTypes.number,
  completed: PropTypes.bool,
}

export default ItemContainer
