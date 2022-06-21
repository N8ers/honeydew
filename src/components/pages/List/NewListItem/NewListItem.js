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
    <form onSubmit={addNewListItem}>
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        value={newListItem}
        onChange={(event) => setNewListItem(event.target.value)}
      />
      <Button
        variant="contained"
        type="submit"
        style={{
          backgroundColor: "#1ea5a3",
          color: "#002f3c",
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
