import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { v4 as uuidv4 } from 'uuid';

const CeramicTint = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          ceramicTint {
            title
            subtitle
            features {
              title
              subtitle
              icon {
                altText
                sourceUrl
              }
            }
            image {
              altText
              localFile {
                childImageSharp {
                  fluid(maxWidth: 1600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
  const { title, subtitle, features, image } = data.wpPage.sections.ceramicTint;

  return (
    <div className="relative mt-12 sm:mt-16 lg:mt-24">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="lg:col-start-2">
          <h3 className="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 text-lg text-gray-500">{subtitle}</p>

          <dl className="mt-10 space-y-10">
            {features.map((feature) => (
              <div key={uuidv4()} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red-500 text-white">
                    <img
                      className="flex-shrink-0 h-6 w-6"
                      src={feature.icon.sourceUrl}
                      alt={feature.icon.altText}
                    />
                  </div>
                </div>
                <div className="ml-4">
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

        <div className="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
          <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md hover:shadow-2xl">
            <div className="relative block w-full bg-white sm:rounded-lg overflow-hidden">
              <Img
                className="w-full"
                fluid={image.localFile.childImageSharp.fluid}
                alt={image.altText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CeramicTint;
