import React, { Suspense, lazy } from 'react';
import ErrorBoundary from './ErrorBoundary';
import BrokenProfile from './BrokenProfile';

const LazyDashboard = lazy(() => import('./LazyDashboard'));

const SuspenseExample = () => {
  return (
    <div>
      <h1>Error Boundary and Suspense Example</h1>

      <h2>1. Error Boundary Example</h2>

      <ErrorBoundary>
        <BrokenProfile />
      </ErrorBoundary>

      <br />

      <h2>2. Suspense Example</h2>

      <Suspense fallback={<h3>Loading Dashboard...</h3>}>
        <LazyDashboard />
      </Suspense>
    </div>
  );};

export default SuspenseExample;

