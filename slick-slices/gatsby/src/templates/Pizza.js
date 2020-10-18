import { graphql } from 'gatsby';
import React from 'react';

export default function SinglePizzaPage() {
  return <p>Single Pizza</p>;
}

// slug gets passed from context in gatsby-node.js
// keeping the query in the page itself isn't 100% necessary
// you can pass the data down from gatsby-node.js if you want to.
// Not a big deal either way.
export const query = graphql`
  query($slug: String!) {
    pizza: sanityPizza(slug: { current: { eq: $slug } }) {
      id
      name
      image {
        asset {
          fluid(maxWidth: 800) {
            ...GatsbySanityImageFluid
          }
        }
      }
      toppings {
        name
        id
        vegetarian
      }
    }
  }
`;
