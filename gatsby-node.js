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


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // This for adding a slug node to an album page
  if (node.internal.type === `ContentfulPhotoAlbumDuplicate`) {
    const pageSlug = `/photo/${node.slug}/`;

    createNodeField({
      node,
      name: `slug`,
      value: pageSlug,
    })
  }

// This for adding a slug node to a photo page
  if (node.internal.type === `ContentfulAsset`) {
    const pageSlug = `/${slug(`${node.title.toLowerCase()} ${node.id}`)}/`;

    createNodeField({
      node,
      name: `slug`,
      value: pageSlug,
    })

    console.log(node.fields);
  }

  // This is for adding a client url from the slug field
  if (node.internal.type === `ContentfulVideo`) {
    const pageUrl = `/video/${node.slug}/`;

    console.log('this happened');

    createNodeField({
      node,
      name: `url`,
      value: pageUrl,
    });
  }

  // This if for adding a client url to a blog post
  if (node.internal.type === `ContentfulBlogPost`) {
    const pageUrl = `/blog/${node.slug}/`;

    createNodeField({
      node,
      name: `url`,
      value: pageUrl,
    });
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    // This for creating an album page
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
    }).then(() => {
      // This for creating a photo page
      graphql(
        `{
          allContentfulAsset {
            edges {
              node {
                id
                title
                fields {
                  slug
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const template = path.resolve('./src/templates/photo-template.js');
        _.each(result.data.allContentfulAsset.edges, edge => {
          const pageSlug = edge.node.fields.slug;
          
          createPage({
            path: pageSlug,
            component: slash(template),
            context: {
              id: edge.node.id,
              slug: pageSlug,
            }
          });
        });
      })
    }).then(() => {
      // This is for creating a video page
      graphql(
        `{
          allContentfulVideo {
            edges {
              node {
                id
                fields {
                  url
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        const template = path.resolve('./src/templates/video-template.js');
        _.each(result.data.allContentfulVideo.edges, edge => {
          const pageUrl = edge.node.fields.url;

          createPage({
            path: pageUrl,
            component: slash(template),
            context: {
              id: edge.node.id,
              url: pageUrl,
            }
          });
        });
      });
    }).then(() => {
      graphql(
        `{
          allContentfulBlogPost {
            edges {
              node {
                id
                fields {
                  url
                }
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        console.log(result);

        const template = path.resolve('./src/templates/blogpost-template.js');
        _.each(result.data.allContentfulBlogPost.edges, edge => {
          const pageUrl = edge.node.fields.url;

          createPage({
            path: pageUrl,
            component: slash(template),
            context: {
              id: edge.node.id,
              url: pageUrl,
            }
          })
        })
      })
    })
    resolve();
  });
}