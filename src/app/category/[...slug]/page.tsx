import CategoryListing from "@/screens/CategoryListing";

export default function Page({ params }: { params: { slug: string[] } }) {
  const [first, second] = params.slug || [];
  const gender = second ? first : undefined;
  const slug = second ? second : first;

  return <CategoryListing slug={slug} gender={gender} />;
}
