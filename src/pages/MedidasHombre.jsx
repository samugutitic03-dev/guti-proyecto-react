import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

export default function MedidasHombre() {
  const navigate = useNavigate();

  return (
    <Layout title="Medidas Hombre">
      <button
        type="button"
        className="volver"
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        onClick={() => navigate(-1)}
      >
        ‹ Back
      </button>

      <section className="guia-medidas-container">
        <h2>GUÍA DE MEDIDAS (HOMBRES)</h2>

        <div className="imagen-guia">
          <img src="/medidas.PNG" alt="Guía de medidas hombre" />
        </div>

        <table className="tabla-medidas">
          <thead>
            <tr>
              <th>Talla</th>
              <th>Ancho Pecho (cm)</th>
              <th>Longitud Manga (cm)</th>
              <th>Longitud Frente (cm)</th>
              <th>Hombro (cm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>S</strong></td>
              <td>56.5</td>
              <td>21</td>
              <td>73</td>
              <td>19.5</td>
            </tr>
            <tr>
              <td><strong>M</strong></td>
              <td>58.5</td>
              <td>22</td>
              <td>75</td>
              <td>20.5</td>
            </tr>
            <tr>
              <td><strong>L</strong></td>
              <td>60.5</td>
              <td>23</td>
              <td>77</td>
              <td>20.5</td>
            </tr>
            <tr>
              <td><strong>XL</strong></td>
              <td>62.5</td>
              <td>23.5</td>
              <td>79</td>
              <td>21.5</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );
}
