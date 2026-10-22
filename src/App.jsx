import { Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';

// Importación de Estilos Modulares
import './styles/common.css';
import './styles/auth.css';
import './styles/catalog.css';
import './styles/product-detail.css';
import './styles/cart.css';
import './styles/order.css';
import './styles/profile.css';
import './styles/caparazones.css';
import './styles/medidas.css';

// Vistas Principales
import Login from './pages/Login';
import RegistroUsuario from './pages/RegistroUsuario';
import OlvidasteContrasena from './pages/OlvidasteContrasena';
import NuevaContrasena from './pages/NuevaContrasena';
import Inicio from './pages/Inicio';
import UltimosDrops from './pages/UltimosDrops';
import Caparazones from './pages/Caparazones';
import CaparazonesCanje from './pages/CaparazonesCanje';
import Prendas from './pages/Prendas';
import PrendasMasculinas from './pages/PrendasMasculinas';
import PrendasFemeninas from './pages/PrendasFemeninas';
import MedidasHombre from './pages/MedidasHombre';
import MedidasMujer from './pages/MedidasMujer';
import Carrito from './pages/Carrito';
import Pedido from './pages/Pedido';
import Seguimiento from './pages/Seguimiento';
import Perfil from './pages/Perfil';
import MetodoActual from './pages/MetodoActual';
import IngresarTarjeta from './pages/IngresarTarjeta';
import EliminarMetodo from './pages/EliminarMetodo';
import Verificar from './pages/Verificar';
import Pago from './pages/Pago';
import Busqueda from './pages/Busqueda';

// 16 Componentes Individuales de Prendas
import CamisaPrueba1 from './pages/products/CamisaPrueba1';
import BuzoHombre from './pages/products/BuzoHombre';
import BuzoOscuroHombre from './pages/products/BuzoOscuroHombre';
import ZapatosHombre from './pages/products/ZapatosHombre';
import ConjuntoHombre from './pages/products/ConjuntoHombre';
import GorraBlanca from './pages/products/GorraBlanca';
import PantalonetaCasual from './pages/products/PantalonetaCasual';
import GafasHombre from './pages/products/GafasHombre';
import TopMujerPrueba from './pages/products/TopMujerPrueba';
import BuzoRosaMujer from './pages/products/BuzoRosaMujer';
import BuzoOversizeMujer from './pages/products/BuzoOversizeMujer';
import ChaquetaMujer from './pages/products/ChaquetaMujer';
import FaldaMujer from './pages/products/FaldaMujer';
import JoggerMujer from './pages/products/JoggerMujer';
import TopBlanco from './pages/products/TopBlanco';
import VestidoDeBano from './pages/products/VestidoDeBano';

export default function App() {
  return (
    <CartProvider>
      <OrderProvider>
        <Routes>
          {/* Autenticación (Login por defecto) */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<RegistroUsuario />} />
          <Route path="/registrousuario" element={<RegistroUsuario />} />
          <Route path="/olvidaste-contrasena" element={<OlvidasteContrasena />} />
          <Route path="/olvidastecontrasena" element={<OlvidasteContrasena />} />
          <Route path="/nueva-contrasena" element={<NuevaContrasena />} />
          <Route path="/nuevacontrasena" element={<NuevaContrasena />} />

          {/* Tienda Principal */}
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/ultimos-drops" element={<UltimosDrops />} />
          <Route path="/caparazones" element={<Caparazones />} />
          <Route path="/caparazones/canjear" element={<CaparazonesCanje />} />
          <Route path="/caparazones2" element={<CaparazonesCanje />} />
          <Route path="/prendas" element={<Prendas />} />
          <Route path="/prendas/masculinas" element={<PrendasMasculinas />} />
          <Route path="/prendasmasculinas" element={<PrendasMasculinas />} />
          <Route path="/prendas/femeninas" element={<PrendasFemeninas />} />
          <Route path="/prendasfemeninas" element={<PrendasFemeninas />} />
          <Route path="/buscar" element={<Busqueda />} />

          {/* Guías de Medidas */}
          <Route path="/medidas/hombre" element={<MedidasHombre />} />
          <Route path="/medidashombre" element={<MedidasHombre />} />
          <Route path="/medidas/mujer" element={<MedidasMujer />} />
          <Route path="/medidasmujeres" element={<MedidasMujer />} />

          {/* Componentes Individuales de Prendas Masculinas */}
          <Route path="/producto/camisaprueba1" element={<CamisaPrueba1 />} />
          <Route path="/camisaprueba1" element={<CamisaPrueba1 />} />
          <Route path="/producto/buzohombre" element={<BuzoHombre />} />
          <Route path="/buzohombre" element={<BuzoHombre />} />
          <Route path="/producto/buzooscurohombre" element={<BuzoOscuroHombre />} />
          <Route path="/buzooscurohombre" element={<BuzoOscuroHombre />} />
          <Route path="/producto/zapatoshombre" element={<ZapatosHombre />} />
          <Route path="/zapatoshombre" element={<ZapatosHombre />} />
          <Route path="/producto/conjuntohombrebuzoysudadera" element={<ConjuntoHombre />} />
          <Route path="/conjuntohombrebuzoysudadera" element={<ConjuntoHombre />} />
          <Route path="/producto/gorrablanca" element={<GorraBlanca />} />
          <Route path="/gorrablanca" element={<GorraBlanca />} />
          <Route path="/producto/pantalonetacasual" element={<PantalonetaCasual />} />
          <Route path="/pantalonetacasual" element={<PantalonetaCasual />} />
          <Route path="/producto/gafashombre" element={<GafasHombre />} />
          <Route path="/gafashombre" element={<GafasHombre />} />

          {/* Componentes Individuales de Prendas Femeninas */}
          <Route path="/producto/topmujerprueba" element={<TopMujerPrueba />} />
          <Route path="/topmujerprueba" element={<TopMujerPrueba />} />
          <Route path="/producto/buzorosamujer" element={<BuzoRosaMujer />} />
          <Route path="/buzorosamujer" element={<BuzoRosaMujer />} />
          <Route path="/producto/buzooversizemujer" element={<BuzoOversizeMujer />} />
          <Route path="/buzooversizemujer" element={<BuzoOversizeMujer />} />
          <Route path="/producto/chaquetamujer" element={<ChaquetaMujer />} />
          <Route path="/chaquetamujer" element={<ChaquetaMujer />} />
          <Route path="/producto/faldamujer" element={<FaldaMujer />} />
          <Route path="/faldamujer" element={<FaldaMujer />} />
          <Route path="/producto/joggermujer" element={<JoggerMujer />} />
          <Route path="/joggermujer" element={<JoggerMujer />} />
          <Route path="/producto/topblanco" element={<TopBlanco />} />
          <Route path="/topblanco" element={<TopBlanco />} />
          <Route path="/producto/vestidodebano" element={<VestidoDeBano />} />
          <Route path="/vestidodebano" element={<VestidoDeBano />} />

          {/* Carrito, Pedido y Seguimiento */}
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/carritotortugo" element={<Carrito />} />
          <Route path="/pedido" element={<Pedido />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/pago" element={<Pago />} />

          {/* Perfil y Métodos de Pago */}
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/metodo-actual" element={<MetodoActual />} />
          <Route path="/metodo-actual.html" element={<MetodoActual />} />
          <Route path="/ingresar-tarjeta" element={<IngresarTarjeta />} />
          <Route path="/ingresar-tarjeta.html" element={<IngresarTarjeta />} />
          <Route path="/eliminar-metodo" element={<EliminarMetodo />} />
          <Route path="/eliminar-metodo.html" element={<EliminarMetodo />} />
          <Route path="/verificar" element={<Verificar />} />
          <Route path="/verificar.html" element={<Verificar />} />

          {/* Redirección por defecto */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </OrderProvider>
    </CartProvider>
  );
}
