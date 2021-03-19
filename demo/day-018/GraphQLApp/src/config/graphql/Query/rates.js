import {gql} from '@apollo/client';
const QUERY_RATES = gql`
  query {
    rates(currency: "USD") {
      currency
      rate
      name
    }
  }
`;

export {QUERY_RATES};

export default {};
