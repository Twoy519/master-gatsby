import { graphql } from 'gatsby';
import React from 'react';
import PizzaList from '../components/PizzaList';

export default function PizzasPage({ data }) {
  // no loading state in Gatsby. SSR won't render until its there.
  const pizzas = data.pizzas.nodes;
  return (
    <>
      <PizzaList pizzas={pizzas} />
    </>
  );
}

// page-level query
export const pageQuery = graphql`
  query PizzaQuery {
    # rename to just pizzas
    pizzas: allSanityPizza {
      nodes {
        id
        name
        slug {
          _key
          _type
          current
        }
        toppings {
          id
          name
        }
        image {
          asset {
            fixed(width: 200, height: 200) {
              ...GatsbySanityImageFixed
            }
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
