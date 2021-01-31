import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { v4 as uuidv4 } from 'uuid';

const Reviews = () => {
  const SVGStar = () => {
    const rating = 5;
    const stars = [];

    for (let i = 0; i < rating; i += 1) {
      stars.push(
        <svg
          key={uuidv4()}
          className="h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          reviews {
            to
            sectionTitle
            customerReviews {
              name
              review
              date
              image {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const { to, sectionTitle, customerReviews } = data.wpPage.sections.reviews;

  return (
    <section>
      <div className="bg-white p-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p
              id={to}
              className="mt-1 mb-10 md:mb-20 text-3xl font-extrabold text-gray-900 sm:text-4xl"
            >
              {sectionTitle}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg mb-10 lg:mb-20 shadow-lg mx-auto pb-12 pt-6 px-4 max-w-5xl sm:px-6 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="lg:col-span-2">
              <ul className="space-y-12 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:gap-x-8">
                {customerReviews.map((review) => (
                  <li key={uuidv4()}>
                    <div className="flex items-center space-x-4 lg:space-x-6">
                      <div className=" h-full">
                        <img
                          className="rounded-full object-cover"
                          src={review.image.sourceUrl}
                          alt={review.image.altText}
                        />
                      </div>
                      <div className="font-medium text-lg leading-6 space-y-1">
                        <h3 className="text-black font-bold">{review.name}</h3>
                        <div className="text-red-600 flex items-center">
                          <SVGStar />
                          {/* <p className="text-gray-400 text-sm font-normal ml-1 truncate">
                            {review.date}
                          </p> */}
                        </div>
                        <p className="text-sm text-gray-900 font-semibold">
                          {review.review}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
