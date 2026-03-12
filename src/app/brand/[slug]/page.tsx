import BrandDetail from "@/screens/BrandDetail";

export default function Page({ params }: { params: { slug: string } }) {
  return <BrandDetail slug={params.slug} />;
}
