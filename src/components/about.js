import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          about {
            to
            description
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

  const { to, description, image } = data.wpPage.sections?.about;
  return (
    <section>
      <div id={to} className="bg-white pt-8 lg:pt-24">
        <div className="pb-16 bg-gray-900 lg:pb-0 lg:z-10 lg:relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative lg:-my-8">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
              />
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                <div className="aspect-w-10 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 lg:aspect-none lg:h-full">
                  <Img
                    className="object-cover lg:h-full lg:w-full"
                    fluid={image.localFile.childImageSharp.fluid}
                    alt={image.altText}
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                <blockquote>
                  <div>
                    <p className="mt-6 text-lg md:text-2xl text-white">
                      {description}
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
