import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Prendas() {
  return (
    <Layout title="Prendas">
      <div className="Botones">
        <Link to="/prendas/masculinas" className="card-prenda">
          <img src="/hombre prendas.PNG" alt="Prendas masculinas" />
          <div className="texto-boton">
            <h2>Prendas Masculinas</h2>
            <p>Ver colección masculina</p>
          </div>
        </Link>

        <Link to="/prendas/femeninas" className="card-prenda">
          <img src="/mujeres prendas.PNG" alt="Prendas femeninas" />
          <div className="texto-boton">
            <h2>Prendas Femeninas</h2>
            <p>Ver colección femenina</p>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
