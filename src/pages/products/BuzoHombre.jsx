import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function BuzoHombre() {
  const product = getProductById('buzohombre');
  return <ProductDetailView product={product} />;
}
