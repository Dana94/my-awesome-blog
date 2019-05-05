// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  transformers: { remark: {} },
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        // grab the md posts from the blog folder
        // creates a route given the path of the file
        path: "blog/**/*.md",
        // GraphQL entity
        typeName: "Post"
      }
    }
  ]
};
