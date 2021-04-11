module.exports = {
    siteMetadata: {
        title: `seitensei.github.io`,
        description: ``,
        author: `thanh nguyen`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-jss`,
        `gatsby-plugin-image`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         name: `images`,
        //         path: `${__dirname}/src/images`,
        //     },
        // },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `seitensei.github.io`,
        //         short_name: `seitensei`,
        //         start_url: `/`,
        //         background_color: `#663399`,
        //         theme_color: `#663399`,
        //         display: `minimal-ui`,
        //         icon: ``, // This path is relative to the root of the site.
        //     },
        // },
        `gatsby-transformer-remark`,
        //`gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
