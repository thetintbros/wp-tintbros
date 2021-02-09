import React, { useState, useEffect, useRef } from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { graphql, useStaticQuery } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import boxLogo from '../images/box-logo.svg';

// Took hook from this video
// https://www.youtube.com/watch?v=eWO1b6EoCnQ&ab_channel=RyanToronto
const useClickOutside = (handler) => {
  const domNode = useRef();

  useEffect(() => {
    const maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener('mousedown', maybeHandler);

    return () => {
      document.removeEventListener('mousedown', maybeHandler);
    };
  });
  return domNode;
};

const Header = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleScroll = () => {
    if (scrolled === true) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 560;
      if (isTop !== true) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });

    return function cleanup() {
      document.removeEventListener('scroll');
    };
  }, []);

  const menuNode = useClickOutside(() => {
    setActive(false);
  });

  const data = useStaticQuery(graphql`
    query {
      wpPage {
        sections {
          menuItems {
            items {
              item
            }
            phoneCta {
              number
              title
              icon {
                altText
                sourceUrl
              }
            }
          }
        }
      }
    }
  `);

  const { items, phoneCta } = data.wpPage.sections?.menuItems;
  return (
    <>
      {/* This example requires Tailwind CSS v2.0+ */}
      <nav
        ref={menuNode}
        className="bg-gray-900 shadow-xl fixed w-full z-20 top-0"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="-ml-2 mr-2 flex items-center md:hidden">
                {/* Mobile menu button  */}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="navbar-burger shadow-xl inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!-- Icon when menu is closed. -->
                          <!--
                  Heroicon name: menu

                  Menu open: "hidden", Menu closed: "block"
                  --> */}
                  <svg
                    className={`${active ? 'hidden' : 'block'} open h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>

                  <span className="sr-only">Close main menu</span>
                  {/* <!-- Icon when menu is open. -->
                          <!--
                  Heroicon name: x

                  Menu open: "block", Menu closed: "hidden"
                  --> */}
                  <svg
                    className={`${active ? 'block' : 'hidden'} close h-6 w-6`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center">
                <LinkScroll
                  onClick={handleScroll}
                  activeClass="active"
                  to="Home"
                  spy
                  smooth
                  offset={-100}
                  duration={1000}
                  className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  {/* <img
                    className="block lg:hidden h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                    alt="Workflow"
                  /> */}

                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={boxLogo}
                    alt="box header"
                  />

                  <div className="hidden lg:block">
                    <div className="flex items-center">
                      <img
                        className="h-10 w-auto"
                        src={boxLogo}
                        alt="box header"
                      />

                      <h2 className=" h-8 w-auto">
                        <span className="text-xl text-white font-bold">
                          Tint Bros
                        </span>
                      </h2>
                    </div>
                  </div>
                </LinkScroll>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                {items.map((i) => (
                  <LinkScroll
                    key={uuidv4()}
                    activeClass="active"
                    to={i.item}
                    spy
                    smooth
                    offset={-100}
                    duration={1000}
                    className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    {i.item}
                  </LinkScroll>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href={`tel:${phoneCta.number}`}>
                  <button
                    type="button"
                    className="relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm sm:text-md font-extrabold rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-red-800 focus:ring-red-500"
                  >
                    <img
                      className="h-5 sm:h-6 fill-current mr-2"
                      src={phoneCta.icon.sourceUrl}
                      alt={phoneCta.icon.altText}
                    />

                    <span className="uppercase">{phoneCta.title}</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <span className="sr-only">Mobile menu</span>
        {/* <!--
      Mobile menu, toggle classes based on menu state.

      Menu open: "block", Menu closed: "hidden"
      --> */}
        <div
          className={`${active ? 'block' : 'hidden'} mobile-menu  md:hidden `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            {items.map((i) => (
              <LinkScroll
                key={uuidv4()}
                onClick={handleToggle}
                activeClass="active"
                to={i.item}
                spy
                smooth
                offset={-100}
                duration={1500}
                className="cursor-pointer text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {i.item}
              </LinkScroll>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
