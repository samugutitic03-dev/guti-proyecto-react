import ProductDetailView from '../../components/ProductDetailView';
import { getProductById } from '../../data/products';

export default function JoggerMujer() {
  const product = getProductById('joggermujer');
  return <ProductDetailView product={product} />;
}
