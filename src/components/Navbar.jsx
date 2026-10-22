import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/inicio">
          TURTLE INC
        </Link>

        <form className="busqueda" onSubmit={handleSearch}>
          <input
            type="text"
            id="buscar"
            placeholder="Buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" title="Buscar en TURTLE INC">
            🐢
          </button>
        </form>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink
                to="/ultimos-drops"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Últimos drops
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/caparazones"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Caparazones
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/prendas"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Prendas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/perfil"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Perfil
              </NavLink>
            </li>
            <li className="nav-item">
              <Link to="/carrito" className="boton-carrito" title="Ver carrito">
                🛒
                {itemCount > 0 && (
                  <span className="carrito-badge">{itemCount}</span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
