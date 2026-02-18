import GenderListing from "@/screens/GenderListing";

export default function Page({ params }: { params: { category: string } }) {
  return <GenderListing gender="men" category={params.category} />;
}
