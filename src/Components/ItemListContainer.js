import { Link } from "react-router-dom";
const ItemListContainer =(props) => {
  return (
    <ul>
      <li>
        <Link to="category/Mother">{props.itemsUno}</Link>
      </li>
      <li>
        <Link to="category/CPU">{props.itemsDos}</Link>
      </li>
      <li>
        <Link to="category/Ram">{props.itemsTres}</Link>
      </li>
      <li>
        <Link to="category/P.Video">{props.itemsCuatro}</Link>
      </li>
      <li>
        <Link to="category/Fuente">{props.itemsCinco}</Link>
      </li>
    </ul>
  );
}

export default ItemListContainer;