/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const _ = require(`lodash`);
const Promise = require(`bluebird`);
const path = require(`path`);
const slash = require(`slash`);
const slug = require(`slug`);

// This for adding a slug node to an album page
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `ContentfulPhotoAlbumDuplicate`) {
    const pageSlug = `/photo/${node.slug}/`;

    createNodeField({
      node,
      name: `slug`,
      value: pageSlug,
    })
  }
}

// This for creating an album page
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(
      `{
        allContentfulPhotoAlbumDuplicate {
          edges {
            node {
              fields {
                slug
              }
              id
            }
          }
        }
      }`
    ).then( result => {
      if (result.errors) {
        console.log(result.errors);
        reject(result.errors);
      }

      // We specify the template that we want to use for this specific page
      const template = path.resolve('./src/templates/album-photos.js');
      _.each( result.data.allContentfulPhotoAlbumDuplicate.edges, edge => {
        createPage({
          // Each page is required to have a `path` as well
          // as a template component. The `context` is
          // optional but is often necessary so the template
          // can query data specific to each page.
          path: edge.node.fields.slug,
          component: slash(template),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            id: edge.node.id,
            slug: edge.node.fields.slug,
          }
        })
      })
    })
    resolve();
  });
}