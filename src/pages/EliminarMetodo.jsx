import { useNavigate, Link } from 'react-router-dom';
import Layout from '../components/Layout';

export default function EliminarMetodo() {
  const navigate = useNavigate();

  const handleEliminar = () => {
    alert('Método de pago eliminado correctamente.');
    navigate('/ingresar-tarjeta');
  };

  return (
    <Layout title="Eliminar Método de Pago">
      <Link to="/metodo-actual" className="volver">
        ‹ Back
      </Link>

      <div className="perfil-container" style={{ maxWidth: '540px' }}>
        <img
          src="https://www.elpais.com.co/resizer/v2/IHQWMUXY2JCZBFPNHJ25HBMMOI.jpg?auth=d44315b6366fbec9ecec981ac4bcf171caace9840e13014765ef557bb9c91e66&smart=true&quality=75&width=1280&height=720"
          alt="Tarjeta"
          style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '20px' }}
        />

        <h2>¿Deseas eliminar este método de pago?</h2>
        <p style={{ color: '#666', fontSize: '15px' }}>
          Al eliminar este método de pago ya no podrás utilizarlo para realizar compras en la plataforma.
        </p>

        <div className="tarjeta-visual" style={{ background: '#37474f' }}>
          <div className="datos">
            <p><strong>Tarjeta registrada:</strong> Nequi</p>
            <p><strong>Número:</strong> **** **** **** 4589</p>
            <p><strong>Propietario:</strong> Santiago Osorno</p>
          </div>
        </div>

        <div className="advertencia-eliminar">
          ⚠️ Esta acción no se puede deshacer.
        </div>

        <div className="botones-accion">
          <button type="button" className="btn-peligro" onClick={handleEliminar}>
            Eliminar Método
          </button>
          <button type="button" className="btn-secundario" onClick={() => navigate('/perfil')}>
            Cancelar
          </button>
        </div>
      </div>
    </Layout>
  );
}
