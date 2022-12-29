import ItemListContainer from "./ItemListContainer"
import Logo from "./Logo"
const NavBar = () => {
  return (
    <header>
      <div className="containerLogo">
        <Logo/>
      </div>
      <nav className="containerList">
      <ItemListContainer
      itemUno = "uno"
      itemDos = "dos"
      itemTres = "tres"
      />
      </nav>
      <div className="containerCart">

      </div>
    </header>
  )
}

export default NavBar