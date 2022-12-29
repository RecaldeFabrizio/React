import Logo from "./Logo"
import ItemListContainer from "./ItemListContainer"
import CardWdiget from "./CardWdiget"
const NavBar = () => {
  return (
    <header>
      <div className="containerLogo">
        <Logo/>
      </div>
      <nav className="containerList">
      <ItemListContainer
      itemsUno = "uno"
      itemsDos = "dos"
      itemsTres = "tres"
      />
      </nav>
      <div className="containerCart">
        <CardWdiget/>
      </div>
    </header>
  )
}

export default NavBar