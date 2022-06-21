import { List } from "@mui/material"
import PropTypes from "prop-types"

import ItemContainer from "../ItemContainer/ItemContainer"

function ListItems(props) {
  const { listItems, listId } = props

  return (
    <List>
      {listItems.map((item) => {
        return (
          <ItemContainer
            key={item.id}
            id={item.id}
            listId={listId}
            title={item.title}
            completed={item.completed}
          />
        )
      })}
    </List>
  )
}

ListItems.propTypes = {
  listItems: PropTypes.array,
  listId: PropTypes.number,
}

export default ListItems
