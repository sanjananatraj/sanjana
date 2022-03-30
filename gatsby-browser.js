// https://stackoverflow.com/questions/55336831/how-to-fix-gatsby-js-link-component-retaining-scroll-position-and-not-resetting

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const { pathname } = location
//   const routes = [`/`]

//   if(routes.indexOf(pathname) !== -1) {
//     window.scrollTo(0,0)
//   }
//   return false
// }
