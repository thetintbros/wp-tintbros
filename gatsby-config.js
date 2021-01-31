require('dotenv').config();

const resolveConfig = require('tailwindcss/resolveConfig');

const tailwindConfig = require('./tailwind.config.js');

const fullConfig = resolveConfig(tailwindConfig);
module.exports = {
  siteMetadata: {
    title: `Tint Bros`,
    description: `Car tinting company in Aurora, Colorado. We specialize in carbon and ceramic tinting.`,
    author: `Idris Akbar`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
        url:
          process.env.GATSBY_WPGRAPHQL_URL ||
          `http://the-tint-bros.local/graphql`,
        schema: {
          // Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
          typePrefix: `Wp`,
        },
        develop: {
          // caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
          hardCacheMediaFiles: true,
        },
        type: {
          Post: {
            limit:
              process.env.NODE_ENV === `development` // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                ? 50 // and we don't actually need more than 5000 in production for this particular site
                : 5000,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tint Bros`,
        short_name: `starter`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.green['500'],
        display: `minimal-ui`,
        icon: `src/images/tailwind-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    'gatsby-plugin-postcss',
  ],
};
