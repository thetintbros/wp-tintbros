import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Link as LinkScroll } from 'react-scroll';

const CallToAction = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          callToAction {
            headline {
              titleOne
              titleTwo
            }
            subheadline
            ctaButton
            image {
              altText
              localFile {
                childImageSharp {
                  fluid {
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

  const {
    headline,
    subheadline,
    ctaButton,
    image,
  } = data.wpPage.sections.callToAction;
  return (
    <div className="relative mb-20">
      <div className="absolute inset-0 flex flex-col" aria-hidden="true">
        <div className="flex-1 bg-gray-50" />
        <div className="flex-1" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-400 to-gray-900 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">{headline.titleOne}</span>
                <span className="block text-red-900">{headline.titleTwo}</span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-white">{subheadline}</p>

              <LinkScroll
                activeClass="no-active"
                to="Schedule"
                spy
                smooth
                offset={-100}
                duration={1000}
                className="cursor-pointer uppercase mt-8 bg-white border border-transparent rounded-md shadow py-3 px-6 inline-flex items-center text-base font-medium text-red-600 hover:text-red-500"
              >
                {ctaButton}
              </LinkScroll>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 md:aspect-w-2">
            <Img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              fluid={image.localFile.childImageSharp.fluid}
              alt={image.altText}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
