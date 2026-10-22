import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function ZapatosHombre() {
  const product = getProductById('zapatoshombre');
  return <ProductDetailView product={product} />;
}
