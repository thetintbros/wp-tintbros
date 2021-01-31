import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Link as LinkScroll } from 'react-scroll';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          moreServices {
            title
            subtitle
            headlightTinting {
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
              title
              price
              description
              ctaButton
            }
            vinylWrap {
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
              title
              price
              description
              ctaButton
            }
          }
        }
      }
    }
  `);

  const {
    title,
    subtitle,
    headlightTinting,
    vinylWrap,
  } = data.wpPage.sections.moreServices;
  return (
    <>
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 m-4 text-lg text-gray-500">{subtitle}</p>
      </div>
      <section className="bg-gray-900 mb-12">
        <div className=" max-w-5xl mx-auto grid md:grid-cols-2 md:px-6 lg:px-8">
          {/* container 1 */}
          <div className="pb-20 py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10 md:border-r-8 md:border-white lg:pr-16">
            <div className="flex-shrink-0">
              <Img
                className="rounded-lg h-auto shadow-md hover:shadow-lg"
                fluid={headlightTinting.image.localFile.childImageSharp.fluid}
                alt={headlightTinting.image.altText}
              />
            </div>
            <div className="flex items-baseline pt-4">
              <h1 className="text-2xl font-bold text-white">
                {headlightTinting.title}
              </h1>
              <span className="text-3xl ml-2  text-white">-</span>
              <p className="text-2xl ml-2 text-red-600 font-semibold">
                {headlightTinting.price}
              </p>
            </div>
            <blockquote className="mt-3 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg text-white md:flex-grow">
                <p className="relative">{headlightTinting.description}</p>
              </div>
              <footer className="mt-8">
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
                    {headlightTinting.ctaButton}
                  </LinkScroll>
                </div>
              </footer>
            </blockquote>
          </div>

          {/* container 2 */}
          <div className="pb-20 py-12 px-4 sm:px-6 md:flex-col md:py-16 md:pl-10 md:pr-0 lg:pl-16 md:border-l-8 md:border-white">
            <div className="flex-shrink-0">
              <Img
                className="rounded-lg h-auto shadow-md hover:shadow-lg"
                fluid={vinylWrap.image.localFile.childImageSharp.fluid}
                alt={vinylWrap.image.altText}
              />
            </div>
            <div className="flex items-baseline pt-4">
              <h1 className="text-2xl font-bold  text-white">
                {vinylWrap.title}
              </h1>
              <span className="text-3xl ml-2  text-white">-</span>
              <p className="text-2xl ml-2 text-red-600 font-semibold">
                {vinylWrap.price}
              </p>
            </div>
            <blockquote className="mt-3 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg  text-white md:flex-grow">
                <p className="relative">{vinylWrap.description}</p>
              </div>
              <footer className="mt-8">
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
                    {vinylWrap.ctaButton}
                  </LinkScroll>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
