import GenderListing from "@/screens/GenderListing";

export default function Page({ params }: { params: { category: string; subcategory: string } }) {
  return <GenderListing gender="men" category={params.category} subcategory={params.subcategory} />;
}
