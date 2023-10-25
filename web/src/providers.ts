import { configureChains, createConfig } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { publicProvider } from 'wagmi/providers/public'

export const chains = [mainnet]

const { publicClient } = configureChains(chains, [publicProvider()], {
  batch: {
    multicall: { batchSize: 10_240 },
  },
})

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient,
})
