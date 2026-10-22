import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function CamisaPrueba1() {
  const product = getProductById('camisaprueba1');
  return <ProductDetailView product={product} />;
}
