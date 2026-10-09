import Image from "next/image";
import HomePage from "./homepage/page";
import { Suspense } from "react";
import GlobalLoading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<GlobalLoading />}>
      <HomePage />
    </Suspense>
  );
}
