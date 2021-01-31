import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { InlineWidget } from 'react-calendly';

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          contact {
            to
            title
            subtitle
            address {
              street
              city
            }
            phone {
              number
            }
            email {
              email
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
    address,
    phone,
    email,
  } = data.wpPage.sections.contact;

  return (
    <section>
      <div id={to} className="relative bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-900" />
        </div>
        <div className="relative max-w-4xl mx-auto lg:grid lg:grid-cols-5">
          <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="max-w-lg mx-auto">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl">
                {title}
              </h2>
              <p className="mt-3 text-lg leading-6 text-gray-100">{subtitle}</p>
              <dl className="mt-8 text-base text-gray-100">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <a
                    className="hover:text-gray-400"
                    href="https://www.google.com/maps/dir//the+tint+bros/@39.626994,-104.8204336,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x876c89f9d8685a35:0xcb8118637c876834!2m2!1d-104.7597737!2d39.6194989"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <dd className="flex">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="current"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <div className="ml-3">
                        <p>{address.street}</p>
                        <p>{address.city}</p>
                      </div>
                    </dd>
                  </a>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <a
                    href={`tel:${phone.number}`}
                    className="hover:text-gray-400"
                  >
                    <dd className="flex">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="current"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3"> {phone.number}</span>
                    </dd>
                  </a>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <a
                    href={`mailto:${email.email}`}
                    className="hover:text-gray-400"
                  >
                    <dd className="flex">
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="current"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="ml-3"> {email.email} </span>
                    </dd>
                  </a>
                </div>
              </dl>
            </div>
          </div>
          <div
            id="Schedule"
            className="bg-white pt-6 px-4 sm:px-6 lg:col-span-3 lg:px-8 xl:pl-12"
          >
            <div className="max-w-lg mx-auto lg:max-w-none">
              <InlineWidget
                url="https://calendly.com/thetintbrosllc?primary_color=ff0000"
                styles={{
                  height: '1095px',
                }}
              />

              {/* <form action="#" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Phone"
                />
              </div>
              <div className="flex">
                <div className="mr-8">
                  <span className="text-gray-900">Tint Type</span>
                  <div className="mt-2 flex flex-col">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="tintType"
                        value="carbon"
                      />
                      <span className="ml-2">Carbon</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="tintType"
                        value="ceramic"
                      />
                      <span className="ml-2">Ceramic</span>
                    </label>
                  </div>
                </div>

                <div>
                  <span className="text-gray-900">Car Doors</span>
                  <div className="mt-2 flex flex-col">
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="doorAmount"
                        value="2 door"
                      />
                      <span className="ml-2">2 door</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="radio"
                        className="form-radio text-red-500 focus:ring-red-500"
                        name="doorAmount"
                        value="4 door"
                      />
                      <span className="ml-2">4 door</span>
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Message"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center w-full py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
