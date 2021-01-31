import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link as LinkScroll } from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';

const CarbonPrice = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          carbonPrice {
            tag
            description
            twoDoors {
              price
              doors
            }
            fourDoors {
              price
              doors
            }
            features {
              title
              icon {
                altText
                sourceUrl
              }
            }
            ctaButton
          }
        }
      }
    }
  `);

  const {
    tag,
    description,
    twoDoors,
    fourDoors,
    features,
    ctaButton,
  } = data.wpPage.sections.carbonPrice;
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-red-100 text-red-600"
            id="tier-standard"
          >
            {tag}
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="mt-4 mr-3 flex flex-col items-baseline text-6xl font-extrabold text-black">
            {twoDoors.price}
            <span className="ml-1 mt-2 text-2xl font-medium text-gray-500">
              {twoDoors.doors}
            </span>
          </div>
          <div className="mt-4 flex flex-col items-baseline text-6xl font-extrabold text-black">
            {fourDoors.price}
            <span className="ml-1 mt-2 text-2xl font-medium text-gray-500">
              {fourDoors.doors}
            </span>
          </div>
        </div>
        <p className="mt-5 text-lg text-gray-500">{description}</p>
      </div>
      <div className="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-white space-y-6 sm:p-10 sm:pt-6">
        <ul className="space-y-4">
          {features.map((feature) => (
            <li key={uuidv4()} className="flex items-start">
              <div className="flex-shrink-0">
                <img
                  className="flex-shrink-0 h-6 w-6"
                  src={feature.icon.sourceUrl}
                  alt={feature.icon.altText}
                />
              </div>
              <p className="ml-3 text-base text-gray-700">{feature.title}</p>
            </li>
          ))}
        </ul>
        <div className="rounded-md shadow">
          <LinkScroll
            activeClass="no-active"
            to="Schedule"
            spy
            smooth
            offset={-100}
            duration={1000}
            className="cursor-pointer uppercase flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
          >
            {ctaButton}
          </LinkScroll>
        </div>
      </div>
    </div>
  );
};

export default CarbonPrice;
