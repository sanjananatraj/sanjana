# sanjananatraj-website
[![Netlify Status](https://api.netlify.com/api/v1/badges/0cd39d7d-741b-49c4-ba4f-bb8ce40a64f6/deploy-status)](https://app.netlify.com/sites/sanjananatraj/deploys)
![MIT License](https://img.shields.io/github/license/sanjananatraj/sanjana)

This is the source code of my personal website! This website was built using [Gatsby](https://www.gatsbyjs.com/), specifically from Gatsby's starter default. Gatsby is a React-based, GraphQL powered static site generator. It also uses Webpack, Babel, and ESLint, and supports TypeScript. 

For optimal performance, the website is hosted on [Netlify](https://www.netlify.com/). It utilizes [Jamstack](https://jamstack.org/) architecture by having Git as its single source of truth with Netlify for CDN distribution.

## About this repo
This website was not intended to be used as a template, so there is no guidance for that. I suggest creating a Gatsby site with [gatsby-starter-default](https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-default) and building a website from there. Please feel free to take any inspiration from this website. 

## License
This project is sourced under the [MIT License](https://opensource.org/licenses/MIT). 

## Technologies
- React
- GraphQL
- SASS/SCSS
- ESLint
- Prettier
- Webpack
- Babel

## Project Structure 

```
src
 ┣ components
 ┃ ┣ sections
 ┃ ┃ ┣ aboutme.js
 ┃ ┃ ┣ contact.js
 ┃ ┃ ┣ experience.js
 ┃ ┃ ┣ hero.js
 ┃ ┃ ┗ project.js
 ┃ ┣ footer.js
 ┃ ┣ header.js
 ┃ ┣ layout.js
 ┃ ┣ menu.js
 ┃ ┣ nav.js
 ┃ ┗ seo.js
 ┃ fonts
 ┃ images
 ┃ ┣ project-icons
 ┣ pages
 ┃ ┣ 404.js
 ┃ ┣ about.mdx
 ┃ ┣ credits.js
 ┃ ┣ index.js
 ┃ ┣ projects.js
 ┃ ┗ thanks.js
 ┣ styles
 ┃ ┣ footer.module.scss
 ┃ ┣ header.module.scss
 ┃ ┣ layout.scss
 ┃ ┣ menu.scss
 ┃ ┣ sections.module.scss
 ┃ ┗ _variables.scss
 ┗ html.js
```