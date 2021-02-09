import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

const CarTint = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          automotiveTint {
            to
            title
            subtitle
            features {
              title
              subtitle
              icon {
                id
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const {
    to,
    title,
    subtitle,
    features,
  } = data.wpPage.sections?.automotiveTint;

  return (
    <div id={to} className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-gray-500">{subtitle}</p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={uuidv4()} className="flex">
              <img
                className="flex-shrink-0 h-6 w-6 text-green-500"
                src={feature.icon.sourceUrl}
                alt={feature.icon.sourceUrl}
              />
              <div className="ml-3">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  {feature.subtitle}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
};

export default CarTint;
