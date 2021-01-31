import React from 'react';
import CarbonTint from './carbon-tint';
import CarbonVSCeramic from './carbon-vs-ceramic';
import CeramicTint from './ceramic-tint';

const Products = () => (
  <section>
    <div className="py-12 pb-20 bg-white overflow-hidden lg:py-6 lg:pb-20">
      <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <CarbonVSCeramic />
        <CarbonTint />
        <CeramicTint />
      </div>
    </div>
  </section>
);

export default Products;
