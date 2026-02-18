import CollectionPage from "@/screens/CollectionPage";

export default function Page({ params }: { params: { slug: string } }) {
  return <CollectionPage slug={params.slug} />;
}
