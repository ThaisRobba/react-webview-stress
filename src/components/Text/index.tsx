import styled from 'styled-components'
import colors from '../../colors'

const Text = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: ${({ small }) => (small ? '14px' : '16px')};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  color: ${({ color }) => (color ? color : colors.birdpersonGray500)};
  ${({ capitalize }) => capitalize && 'text-transform: capitalize;'}
`

export default Text
