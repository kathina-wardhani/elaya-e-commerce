import ProductDetail from "@/screens/ProductDetail";

export default function Page({ params }: { params: { slug: string } }) {
  return <ProductDetail slug={params.slug} />;
}
