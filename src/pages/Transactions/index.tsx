import React from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import Heading from '../../components/Heading'

import TransactionItem from '../../components/TransactionItem'

const Header = styled.div`
  background-color: ${colors.squanchyGray20};
  padding: 24px 16px;
`

const rand = () => Math.random() > 0.5

const createTransaction = () => {
  return {
    name: rand() ? 'joão silva' : 'beatriz gomez',
    amount: rand() ? 'R$ 1.400,00' : 'R$ 223,87',
    date: new Date().toISOString(),
    status: rand() ? 'Em análise' : 'Aprovado',
  }
}

const mockTransactions = Array.from({ length: 2000 }, createTransaction)

const Transactions = () => {
  return (
    <div>
      <Header>
        <Heading>Minhas vendas</Heading>
      </Header>
      {mockTransactions.map((props) => (
        <TransactionItem {...props} />
      ))}
    </div>
  )
}

export default Transactions
