import React from 'react';
import Layout from './src/components/Layout';

// https://www.gatsbyjs.com/docs/browser-apis/#wrapPageElement
export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
