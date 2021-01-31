import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const CarbonVSCeramic = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          carbonVsCeramic {
            title
            subtitle
          }
        }
      }
    }
  `);

  const { title, subtitle } = data.wpPage.sections.carbonVsCeramic;

  return (
    <div className="relative">
      <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
        {subtitle}
      </p>
    </div>
  );
};

export default CarbonVSCeramic;
