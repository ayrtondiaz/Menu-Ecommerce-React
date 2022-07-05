import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header fixed top justify-content-between">
      <nav className="navbar navbar-expand-lg bg-dark fixed-top navbar-dark justify-content-between">
  <div className="container justify-content-between">
    <a className="navbar-brand" href="#">LOGO</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Productos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Categoria 1</a></li>
            <li><a className="dropdown-item" href="#">Categoria 2</a></li>
            <li><a className="dropdown-item" href="#">Categoria 3</a></li>
          </ul>
        </li>
        <li className="nav-item ">
            <button id="btnCarrito" className="carrito"><i className="fas fa-shopping-cart carrito-h"></i><span id="contadorCarrito" className="carrito-h">0</span></button>
          </li>
      </ul>
    </div>
  </div>
</nav>
      </header>
    </div>
  );
}

export default App;
