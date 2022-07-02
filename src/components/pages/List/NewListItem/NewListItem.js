import { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import PropTypes from "prop-types"

function NewListItem(props) {
  const { addListItem } = props

  const [newListItem, setNewListItem] = useState("")

  const addNewListItem = (event) => {
    event.preventDefault()
    addListItem(newListItem)
    setNewListItem("")
  }

  return (
    <form onSubmit={addNewListItem} data-testid="newListItemForm">
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={newListItem}
        data-testid="textField"
        onChange={(event) => setNewListItem(event.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        data-testid="addButton"
        style={{
          backgroundColor: "#1ea5a3",
          color: "white",
          fontWeight: "bold",
          marginLeft: "5px",
        }}
      >
        Add
      </Button>
    </form>
  )
}

NewListItem.propTypes = {
  addListItem: PropTypes.func,
}

export default NewListItem
