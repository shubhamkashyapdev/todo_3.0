import React from "react"
import ListItem from "./ListItem"

const List = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <>
          <ListItem index={index} />
        </>
      ))}
    </>
  )
}

List.defaultProps = {
  items: [{}, {}, {}, {}],
}

export default List
