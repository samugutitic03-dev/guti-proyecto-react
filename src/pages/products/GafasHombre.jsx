import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function GafasHombre() {
  const product = getProductById('gafashombre');
  return <ProductDetailView product={product} />;
}
