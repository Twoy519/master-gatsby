import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteUrl: `https://gatsby.pizza`,
    description: `The best pizza place in Hamilton!`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '05wpf6gc',
        dataset: 'production',
        watchMode: true,
        // no sensitive info here, this file gets checked in
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
