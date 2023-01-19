
const Description = (props) =>{
  return (
    <div className="cardDescription">
        <h3 className="title">
            {props.title}
        </h3>

        <div className="description">
            <span className="descriptionTitle">Description:</span>   
            <p className="parrafo">
                {props.parrafo}
            </p>     
        </div>

        <span className="cantidad">
            Cantidad: {props.cantidad}
        </span>

        <span className="costo">
            ${props.costo}
        </span>
    </div>
  )
}

export default Description