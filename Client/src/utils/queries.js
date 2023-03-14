import { gql } from '@apollo/client';


export const QUERY_USER = gql`

`

export const QUERY_RECIPES = gql`
    query recipes {
        recipes {
            description
            image
            steps
            title
        }
    }
`;

