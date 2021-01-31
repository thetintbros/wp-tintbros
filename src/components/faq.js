import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';

import CallToAction from './call-to-action';

const FAQ = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          faq {
            to
            title
            questions {
              question
              answer
            }
          }
        }
      }
    }
  `);
  const { to, title, questions } = data.wpPage.sections.faq;
  return (
    <section id={to}>
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="capitalize text-3xl font-extrabold text-gray-900 text-center">
            {title}
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              {questions.map((question) => (
                <div key={uuidv4()} className="space-y-2">
                  <dt className="text-lg leading-6 font-medium text-gray-900">
                    {question.question}
                  </dt>
                  <dd className="text-base text-gray-500">{question.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* <!-- Feature section with brand panel --> */}
      <CallToAction />
    </section>
  );
};
export default FAQ;
