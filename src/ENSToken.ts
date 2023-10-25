import { ponder } from '@/generated'

ponder.on('ENSToken:Transfer', async ({ event, context }) => {
  const { Account } = context.entities
  const { from, to, value } = event.params

  await Account.upsert({
    id: from,
    create: {
      ensTokens: 0n,
    },
    update: ({ current }) => ({
      ensTokens: current.ensTokens - value,
    }),
  })

  await Account.upsert({
    id: to,
    create: {
      ensTokens: value,
    },
    update: ({ current }) => ({
      ensTokens: current.ensTokens + value,
    }),
  })
})
