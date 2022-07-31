import { Link } from "react-router-dom"
import { Card } from "@mui/material"
import PropTypes from "prop-types"

import styles from "./ListPreview.module.css"

function ListPreview(props) {
  const { id, title, tasks, invitedFriends } = props

  const invitedFriendsList = (friends) => {
    return friends.join(", ")
  }

  return (
    <Link key={id} to={`/lists/${id}`}>
      <Card varient="outlined" className={styles.card}>
        <div>{title}</div>
        <ul>
          {tasks.map((task) => {
            return <li key={task.title}>{task.title}</li>
          })}
        </ul>
        <div>
          {invitedFriends?.length && (
            <span>
              <b>Shared with: </b>
              {invitedFriendsList(invitedFriends)}
            </span>
          )}
        </div>
      </Card>
    </Link>
  )
}

ListPreview.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  tasks: PropTypes.array,
  invitedFriends: PropTypes.array,
}

export default ListPreview
