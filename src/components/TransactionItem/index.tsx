import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

import Text from '../Text'
import colors from '../../colors'

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;
`

const Icon = styled.div`
  padding: 16px;
  margin-right: 8px;
  border-radius: 100%;
  border: 1px solid ${colors.squanchyGray20};
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
    <IconContainer>
      <Icon>🤨</Icon>
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
    </IconContainer>
  )
}

export default TransactionItem
