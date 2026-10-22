import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Caparazones() {
  return (
    <Layout title="Caparazones">
      <div className="contenedor-caparazones">
        <div className="card-caparazones">
          <h2>Información</h2>
          <p>Sigue siendo parte de la manada tortuga.</p>
          <p>Los Caparazones son nuestro sistema de recompensas.</p>
          <p>
            Por cada compra que hagas en la tienda, ganarás caparazones que
            podrás usar para obtener descuentos y recompensas exclusivas.
          </p>
          <p>
            Cuanto más compres, más caparazones acumulas y mejores beneficios
            obtienes.
          </p>
          <p style={{ fontStyle: 'italic', fontSize: '14px', color: '#888' }}>
            (Las recompensas pueden variar según promociones o eventos especiales
            en tienda.)
          </p>
        </div>

        <div className="card-caparazones">
          <h2>RECOMPENSAS</h2>
          <div className="recompensa-item">
            <span>25% de descuento</span>
            <span className="puntos">100 🐢</span>
          </div>
          <div className="recompensa-item">
            <span>50% de descuento</span>
            <span className="puntos">200 🐢</span>
          </div>
          <div className="recompensa-item">
            <span>75% de descuento</span>
            <span className="puntos">350 🐢</span>
          </div>
          <div className="recompensa-item">
            <span>99% de descuento</span>
            <span className="puntos">666 🐢</span>
          </div>

          <Link
            to="/caparazones/canjear"
            className="btn-auth"
            style={{ marginTop: '25px', textDecoration: 'none' }}
          >
            Canjear Caparazones
          </Link>
        </div>
      </div>
    </Layout>
  );
}
