import React from 'react';
// import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import { Link as LinkScroll } from 'react-scroll';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          hero {
            to
            title
            subtitle
            bookBtn
            learnBtn
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

  const {
    to,
    title,
    subtitle,
    bookBtn,
    learnBtn,
    image,
  } = data.wpPage.sections.hero;

  return (
    <section>
      <div id={to} className="relative bg-white overflow-hidden mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8" />

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1>
                  {/* <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                  <span className="block text-red-600">
                    Professional Car{' '}
                    <span className="text-gray-900">Tinting</span>
                  </span>
                  <span className="block text-red-600">In Denver</span>
                </span> */}
                  <span className="text-gray-900 mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-5xl">
                    {title}
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {subtitle}
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <LinkScroll
                      activeClass="active"
                      to="Schedule"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                    >
                      {bookBtn}
                    </LinkScroll>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <LinkScroll
                      activeClass="active"
                      to="Services"
                      spy
                      smooth
                      offset={-100}
                      duration={1000}
                      className="cursor-pointer uppercase w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                    >
                      {learnBtn}
                    </LinkScroll>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-4">
          <Img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            fluid={image.localFile.childImageSharp.fluid}
            alt={image.altText}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
