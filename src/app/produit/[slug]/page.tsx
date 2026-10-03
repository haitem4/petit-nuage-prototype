import { MOCK_PRODUCTS } from "@/data/mockProducts";
import ProductDetailClientView from "./ProductDetailClientView";

export function generateStaticParams() {
  return MOCK_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  return <ProductDetailClientView slug={params.slug} />;
}
