import type { QueryResolvers } from '@/generated'

export const Query: QueryResolvers = {
	hello: (_, __, ctx) => {
		return 'hello'
	},
}
