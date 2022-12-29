import carrito from "../Components/carrito.svg"

const CardWdiget = () => {
  return (
    <div className="containerCantCart">
        <img src={carrito} alt="carrito"></img>
        <samp className="cantCart">
            1
        </samp>
    </div>
  )
}

export default CardWdiget