import AboutLayout from "@/Presentation/layout/about/AboutLayout/AboutLayout";
import { Suspense } from "react";

export default async function about() {
  return (
    <Suspense>
      <AboutLayout />
    </Suspense>
  );
}
