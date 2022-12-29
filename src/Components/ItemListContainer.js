const ItemListContainer = ({props}) => {
  return (
    <ul>
        <il>{props.itemUno}</il>
        <il>{props.itemDos}</il>
        <il>{props.itemTres}</il>
    </ul>
  )
}

export default ItemListContainer