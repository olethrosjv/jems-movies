module.exports = {
  siteMetadata: {
    title: `Jems Movies on the Lawn`,
    description: `A site for people who love watching movies outside and want to create a drive-in theater experience at home`,
    author: `Joe Vaughn`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-mdx`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jems Movies on the Lawn`,
        short_name: `Jems Movies`,
        start_url: `/`,
        background_color: `#6b2a2a`,
        //theme_color: `#663399`,
        theme_color: `#6b2a2a`,
        display: `minimal-ui`,
        icon: `src/images/backyard-movie-fans.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
     `gatsby-plugin-offline`,
  ],
}
