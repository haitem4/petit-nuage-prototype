import { CATEGORIES } from "@/data/mockProducts";
import CollectionClientView from "./CollectionClientView";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({
    slug: category.slug,
  }));
}

export default function CollectionPage({ params }: { params: { slug: string } }) {
  return <CollectionClientView slug={params.slug} />;
}
