import { ponder } from '@/generated'

ponder.on('ENSToken:DelegateVotesChanged', async ({ event, context }) => {
  const { Delegate } = context.entities
  const { delegate, newBalance } = event.params

  await Delegate.upsert({
    id: delegate,
    create: {
      ensVotingPower: newBalance,
    },
    update: {
      ensVotingPower: newBalance,
    },
  })
})
