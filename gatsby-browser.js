/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

 // You can delete this file if you're not using it

const windowWidth = window.innerWidth

exports.shouldUpdateScroll = args => {
  // Scroll position only matters on mobile as on larger screens, we use a modal.
  if (windowWidth < 750) {
    return true;
  }
  else {
    console.log('it didnt update');
    return false;
  }
}