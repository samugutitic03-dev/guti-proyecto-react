import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function Verificar() {
  const [codigo, setCodigo] = useState('');
  const [verificado, setVerificado] = useState(false);
  const navigate = useNavigate();

  const handleVerificar = (e) => {
    e.preventDefault();
    if (codigo.length < 4) {
      alert('Ingresa un código válido de al menos 4 dígitos.');
      return;
    }
    setVerificado(true);
    setTimeout(() => {
      navigate('/metodo-actual');
    }, 1200);
  };

  return (
    <Layout title="Verificar Método de Pago">
      <div className="perfil-container" style={{ maxWidth: '500px' }}>
        <h2>Verificación de Pago</h2>

        <img
          src="https://cdn-icons-png.flaticon.com/512/633/633611.png"
          alt="Verificación"
          style={{ width: '80px', margin: '15px auto', display: 'block' }}
        />

        <p style={{ color: '#666', fontSize: '15px', marginBottom: '25px' }}>
          Ingresa el código de verificación enviado a tu método de pago registrado.
        </p>

        <form className="perfil-form" onSubmit={handleVerificar}>
          <label>Código de verificación</label>
          <input
            type="text"
            placeholder="Ejemplo: 123456"
            maxLength="6"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            style={{ textAlign: 'center', fontSize: '20px', letterSpacing: '4px' }}
          />

          <button type="submit" className="btn-auth">
            Verificar Código
          </button>
        </form>

        {verificado && (
          <div className="pago-exitoso">
            ✅ ¡Método de pago verificado con éxito! Redirigiendo...
          </div>
        )}

        <button
          type="button"
          className="volver"
          style={{ background: 'none', border: 'none', cursor: 'pointer', marginTop: '20px' }}
          onClick={() => navigate('/metodo-actual')}
        >
          Volver a Métodos de Pago
        </button>
      </div>
    </Layout>
  );
}
