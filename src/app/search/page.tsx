import { Suspense } from "react";
import SearchPage from "@/screens/SearchPage";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <SearchPage />
    </Suspense>
  );
}
