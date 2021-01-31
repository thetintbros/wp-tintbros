/* eslint-disable */

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Seo from 'gatsby-plugin-wpgraphql-seo';

import CarTint from '../components/car-tint';
import CarbonVSCeramic from '../components/carbon-vs-ceramic';
import Hero from '../components/hero';
import Products from '../components/products';

import Layout from '../components/layout';
import Pricing from '../components/pricing';
import Reviews from '../components/reviews';
import Contact from '../components/contact';
import FAQ from '../components/faq';
import Services from '../components/services';
import About from '../components/about';

function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      wpPage(uri: {eq: "/"}) {
        nodeType
        title
        uri
        seo {
          title
          metaDesc
          focuskw
          metaKeywords
          metaRobotsNoindex
          metaRobotsNofollow
          opengraphTitle
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            srcSet
          }
          twitterTitle
          twitterDescription
          twitterImage {
            altText
            sourceUrl
            srcSet
          }
          canonical
          cornerstone
          schema {
            articleType
            pageType
            raw
          }
        }
      }
    }
  `);
  return (
    <>
      <Seo post={data.wpPage} />
      <Layout>
        <Hero />
        <CarTint />
        <Products />
        <Pricing />
        <Services />
        <Reviews />
        <Contact />
        <About />
        <FAQ />
      </Layout>
    </>
  );
}

export default IndexPage;
