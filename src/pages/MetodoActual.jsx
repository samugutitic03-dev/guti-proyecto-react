import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function MetodoActual() {
  return (
    <Layout title="Método de Pago">
      <Link to="/perfil" className="volver">
        ‹ Back al Perfil
      </Link>

      <div className="perfil-container" style={{ maxWidth: '550px' }}>
        <h2>Método de Pago Actual</h2>

        <div className="tarjeta-visual">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGNGdbqsun1jR_HaStAiMjCxRHj68WLGTl3-_5574erg&s=10"
            alt="Nequi"
          />
          <div className="datos">
            <p><strong>Tipo:</strong> Nequi</p>
            <p><strong>Titular:</strong> Santiago Osorno</p>
            <p><strong>Número:</strong> **** **** **** 4589</p>
            <p><strong>Vence:</strong> 08/29</p>
          </div>
        </div>

        <div className="botones-perfil">
          <Link to="/verificar">Verificar tarjeta</Link>
          <Link to="/eliminar-metodo">Eliminar tarjeta</Link>
          <Link to="/ingresar-tarjeta">Agregar nueva tarjeta</Link>
        </div>
      </div>
    </Layout>
  );
}
