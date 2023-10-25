import { Address, useEnsName } from 'wagmi'
import { Heading, Typography } from '@ensdomains/thorin'

import { Container, Layout } from './components/atoms'
import { formatTokens } from './utils'
import {
  Table,
  TableHeader,
  TableRow,
  emptyTableRowStyle,
} from './components/table'
import { useEnsDelegates } from './hooks/useEnsDelegates'

export default function App() {
  const { data: delegates, error, isLoading } = useEnsDelegates()

  return (
    <Layout>
      <div />

      <Container>
        <Heading align="center">Largest $ENS Token Holders</Heading>

        <Table>
          <TableHeader>
            <span>Rank</span>
            <span>Voting Power</span>
            <span>Account</span>
          </TableHeader>

          {error ? (
            <TableRow style={emptyTableRowStyle}>
              <Typography>Error fetching data, try again later</Typography>
            </TableRow>
          ) : isLoading ? (
            <TableRow style={emptyTableRowStyle}>
              <Typography>Loading</Typography>
            </TableRow>
          ) : delegates ? (
            <>
              {delegates.map((delegate, index) => (
                <TableRow key={delegate.id}>
                  <span>{index + 1}</span>
                  <span>{formatTokens(delegate.ensVotingPower)}</span>
                  <AccountName account={delegate.id as Address} />
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow style={emptyTableRowStyle}>
              <Typography>No data available</Typography>
            </TableRow>
          )}
        </Table>
      </Container>

      <div />
    </Layout>
  )
}

function AccountName({ account }: { account: Address }) {
  const { data: ensName } = useEnsName({
    address: account,
    chainId: 1,
  })

  return <span>{ensName || account}</span>
}
