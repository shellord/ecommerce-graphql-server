import prisma, { PrismaClient } from '@prisma/client'

export type Context = {
	prisma: PrismaClient
}

export const createContext = () => {
	return {
		prisma,
	}
}
