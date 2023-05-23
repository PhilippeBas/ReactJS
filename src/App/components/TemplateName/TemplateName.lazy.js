import React, { lazy, Suspense } from 'react';

const LazyTemplateName = lazy(() => import('../../../../grc_template/functionHooked/TemplateName'));

const TemplateName = props => (
  <Suspense fallback={null}>
    <LazyTemplateName {...props} />
  </Suspense>
);

export default TemplateName;
