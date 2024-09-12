import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getWeekPendingGoals } from '../../services/getWeekPendingGoal'

export const getPendingGoalsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/pendingGoals', async () => {
    const { pendingGoals } = await getWeekPendingGoals()

    return { pendingGoals }
  })
}
