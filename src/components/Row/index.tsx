import styled from '@emotion/styled'

export const Row = styled.div<{
  itemGap?: string,
  between?: boolean,
  marginBottom?: string,
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.between ? 'space-between' : 'flex-start'};
  margin-bottom: ${props => props.marginBottom};
  > * {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
    margin-right: ${props => props.itemGap}
  }
`
