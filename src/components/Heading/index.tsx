import styled from 'styled-components'
import colors from '../../colors'

const Heading = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  color: ${({ color }) => (color ? color : colors.barneyPurple800)};
`

export default Heading
