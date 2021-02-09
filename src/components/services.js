import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          moreServices {
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
            }
          }
        }
      }
    }
  `);

  const { headlightTinting, vinylWrap } = data.wpPage.sections?.moreServices;
  return (
    <>
      <section className="mx-auto mb-12">
        <div className=" max-w-5xl mx-auto grid md:grid-cols-2 md:px-6 lg:px-8">
          {/* container 1 */}
          <div className="bg-gray-900 rounded-lg md:flex md:flex-col m-4 p-8 md:ml-4 shadow-2xl">
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
            </blockquote>
          </div>
          {/* container 2 */}
          <div className="bg-gray-900 rounded-lg md:flex md:flex-col m-4 p-8 md:ml-4 shadow-2xl">
            <div className="flex-shrink-0">
              <Img
                className="rounded-lg h-auto shadow-md hover:shadow-lg"
                fluid={vinylWrap.image.localFile.childImageSharp.fluid}
                alt={vinylWrap.image.altText}
              />
            </div>
            <div className="flex items-baseline pt-4">
              <h1 className="text-2xl font-bold text-white">
                {vinylWrap.title}
              </h1>
              <span className="text-2xll ml-2  text-white">-</span>
              <p className="text-2xl ml-2 text-red-600 font-semibold">
                {vinylWrap.price}
              </p>
            </div>
            <blockquote className="mt-3 md:flex-grow md:flex md:flex-col">
              <div className="relative text-lg text-white md:flex-grow">
                <p className="relative">{vinylWrap.description}</p>
              </div>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
