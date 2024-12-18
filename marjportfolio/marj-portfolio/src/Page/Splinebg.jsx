import React, { Suspense, lazy } from 'react';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Spline scene="https://prod.spline.design/c2cEffpgMh85iQty/scene.splinecode" />
    </Suspense>
  );
}

