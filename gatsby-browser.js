import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@popperjs/core/dist/umd/popper.min.js";

import browserHydrateFunction from './src/utils/gatsby/browser-hydrate-function';

const React = require('react')

export function wrapPageElement({ element, props }) {
  const Layout = element.type.Layout ?? React.Fragment

  return <Layout {...props}>{element}</Layout>
}

export const replaceHydrateFunction = browserHydrateFunction;