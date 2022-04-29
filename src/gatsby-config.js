module.exports = {
    /* Your site config here */
    plugins: [
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-less`,
        options: {
          javascriptEnabled: true,
          modifyVars: {
            "primary-color": "#00BFA6",
          },
        },
      },
    ],
  }