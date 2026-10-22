import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function PantalonetaCasual() {
  const product = getProductById('pantalonetacasual');
  return <ProductDetailView product={product} />;
}
