import promise from "../../promise"
import Products from "../../Products"
import { useState, useEffect } from "react"
import CardItem from "./CardItem"
import "../Cards/containerCardItems.css"
import { useParams } from "react-router-dom"


const ContainerCardItems = () => {

  const [ datos, setDatos ] = useState( [] );
  let {idCategory} = useParams()

    useEffect(() => {
        if(idCategory === undefined){
          promise(Products,2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
          } else{
          promise(Products.filter(filter => filter.type === idCategory),2000)
            .then(resp => setDatos(resp))
            .catch(error => console.log(error))
          }   
    }, [idCategory])

  return (
    <div className="containerCardItems">
      {
        datos.map(Products => (
          <CardItem
            key={Products.id}
            imagen={Products.image}
            title={Products.title}
            cantidad={Products.stock}
            precio={Products.price}
          />
        ))
      }
    </div>
  )
}

export default ContainerCardItems