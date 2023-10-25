import React, { ComponentType } from 'react';
import { Loader } from '../components/common/Loaders/Loader/Loader';

export function withSuspense(Component: ComponentType) {
  return (
    <React.Suspense fallback={<Loader />}>
      <Component />
    </React.Suspense>
  );
}
