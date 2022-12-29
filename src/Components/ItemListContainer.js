const ItemListContainer = (props) => {
  return (
    <ul>
        <li>{props.itemsUno}</li>
        <li>{props.itemsDos}</li>
        <li>{props.itemsTres}</li>
    </ul>
  )
}

export default ItemListContainer;