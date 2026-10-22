import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function TopMujerPrueba() {
  const product = getProductById('topmujerprueba');
  return <ProductDetailView product={product} />;
}
