import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import ProgrammesClient from "./ProgrammesClient";

export default function ProgrammesPage() {
  return (
    <>
      <Navbar />

      {/* Suspense REQUIRED for useSearchParams */}
      <Suspense fallback={<ProgrammesLoading />}>
        <ProgrammesClient />
      </Suspense>
    </>
  );
}

function ProgrammesLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-slate-500">
      Loading programmes…
    </div>
  );
}
