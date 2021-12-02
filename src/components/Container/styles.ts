import styled from 'styled-components'
import { breakpoints, containers } from 'styles'

import { rem } from 'utils'

export const Container = styled.div`
  padding: 0 ${rem(16)};
  margin: 0 auto;
  flex: 1;

  @media screen and (min-width: ${breakpoints.medium}) {
    max-width: ${containers.medium};
  }

  @media screen and (min-width: ${breakpoints.large}) {
    max-width: ${containers.large};
  }

  @media screen and (min-width: ${breakpoints.huge}) {
    max-width: ${containers.huge};
  }
`
