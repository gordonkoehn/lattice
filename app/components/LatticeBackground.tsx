import React, { Suspense } from "react";
import ClientOnly from "./ClientOnly";

const LatticeBackground = React.lazy(() => import("./LatticeBackground.client"));

export default function LatticeBackgroundWrapper() {
  return (
    <ClientOnly>
      <Suspense fallback={null}>
        <LatticeBackground />
      </Suspense>
    </ClientOnly>
  );
}
