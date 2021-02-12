/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreatePage = async({ page, actions }) => {
    const { createPage } = actions

    console.log("page - ", page.path)
    if (page.path.match(/^\/blogs/)) {
        createPage({
            path: "/blog",
            matchPath: "/blog/*",
            component: path.resolve('pages/blog/blog')
        })
    }
}
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [{
                    test: /bad-module/,
                    use: loaders.null(),
                }, ],
            },
        })
    }
}