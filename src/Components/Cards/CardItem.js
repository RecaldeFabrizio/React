import Image from "./Image"
import "./CardItem.css"
import Description from "./Description"
import CardVerMas from "./CardVerMas"
import CartButton from "./CartButton"


const CardItem = (props) => {
  return (
    <div className="cardItems">
      <Image imagen={props.imagen} />
      <Description title={props.title}
                   cantidad={props.cantidad}
                   precio={props.precio} 
      />
      <div className="buttons">
        <CardVerMas/>
        <CartButton/>
      </div>
    </div>
  )
}

export default CardItem