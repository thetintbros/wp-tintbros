import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import CarbonPrice from './carbon-price';
import CeramicPrice from './ceramic-price ';

const Pricing = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          pricing {
            to
            title
            heading
            subheading
          }
        }
      }
    }
  `);

  const { to, title, heading, subheading } = data.wpPage.sections?.pricing;

  return (
    <section id={to}>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
      <div className="bg-gray-900">
        <div className="pt-12 sm:pt-16 lg:pt-24">
          <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto space-y-2 lg:max-w-none">
              <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider">
                {title}
              </h2>
              <p className="text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                {heading}
              </p>
              <p className="text-xl text-gray-300">{subheading}</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pb-12 bg-white sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
          <div className="relative">
            <div className="absolute inset-0 h-3/4 bg-gray-900" />
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-md mx-auto space-y-4 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">
                <CarbonPrice />
                <CeramicPrice />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
