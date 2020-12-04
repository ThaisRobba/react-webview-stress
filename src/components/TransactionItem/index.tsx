import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import Text from '../Text'
import colors from '../../colors'
import Pizza from './Pizza'

const ContainerWithIcon = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  grid-row-gap: 8px;
`

type TransactionItemProps = {
  name: string
  amount: string
  date: string
  status: string
}

const TransactionItem = ({
  name,
  amount,
  date,
  status,
}: TransactionItemProps) => {
  return (
    <ContainerWithIcon>
      <Pizza />
      <GridContainer>
        <Text bold capitalize>
          {name}
        </Text>
        <Text small color={colors.squanchyGray300}>
          {dayjs(date).format('DD [de] MMMM')}
        </Text>
        <Text>{amount}</Text>
        <Text bold>{status}</Text>
      </GridContainer>
    </ContainerWithIcon>
  )
}

export default TransactionItem
