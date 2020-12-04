import React, { useState } from 'react'
import styled from 'styled-components'

import colors from '../../colors'
import Heading from '../../components/Heading'

import TransactionItem from '../../components/TransactionItem'

const Header = styled.div`
  background-color: ${colors.squanchyGray20};
  padding: 24px 16px;
  display: flex;
`

const SearchInput = styled.input`
  flex-grow: 2;
  margin-left: 16px;
  padding: 6px;
  border: none;
`

const rand = () => Math.random() > 0.5

let uuid = 0

const createTransaction = () => {
  return {
    name: rand() ? 'joão silva' : 'beatriz gomez',
    amount: rand() ? 'R$ 1.400,00' : 'R$ 223,87',
    date: new Date().toISOString(),
    status: rand() ? 'Em análise' : 'Aprovado',
    id: uuid++,
  }
}

const mockTransactions = Array.from({ length: 10000 }, createTransaction)

const Transactions = () => {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <Header>
        <Heading>Minhas vendas</Heading>
        <SearchInput
          type="search"
          id="site-search"
          name="search"
          onChange={({ target }) => setFilter(target.value)}
        />
      </Header>
      {mockTransactions
        .filter((x) => filter === '' || x.name.includes(filter))
        .map((props) => (
          <TransactionItem {...props} key={props.id} />
        ))}
    </div>
  )
}

export default Transactions
