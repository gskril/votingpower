import { ponder } from '@/generated'

ponder.on('ENSToken:Transfer', async ({ event, context }) => {
  const { Account } = context.entities
  const { from, to, value } = event.params

  const beforeBalances = await Account.findMany({
    where: {
      id: {
        in: [from, to],
      },
    },
  })

  const senderBalanceBefore = beforeBalances.find(
    (account) => account.id === from
  )
  const receiverBalanceBefore = beforeBalances.find(
    (account) => account.id === to
  )

  const senderBalance = senderBalanceBefore
    ? senderBalanceBefore.ensTokens - value
    : 0n

  const recieverBalance = receiverBalanceBefore
    ? receiverBalanceBefore.ensTokens + value
    : value

  await Account.upsert({
    id: from,
    create: {
      ensTokens: senderBalance,
    },
    update: {
      ensTokens: senderBalance,
    },
  })

  await Account.upsert({
    id: to,
    create: {
      ensTokens: recieverBalance,
    },
    update: {
      ensTokens: recieverBalance,
    },
  })
})
