import { request, gql } from 'graphql-request'

// const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
const graphqlAPI = process.env.WORDPRESS_GRAPHQL

export const getPosts = async () => {
	const query = gql`
		query MyQuery {
			postsConnection {
				edges {
					node {
						author {
							bio
							id
							name
							photo {
								url
							}
						}
						createdAt
						excerpt
						slug
						title
						featuredImage {
							url
						}
						categories {
							slug
							name
						}
					}
				}
			}
		}
	`

	const result = await request(graphqlAPI, query)
	return result.postsConnection.edges
}