import 'styled-components'

import { Theme } from './src/configs/theme'
declare module 'styled-components' {
  export interface DafaultTheme extends Theme {}
}
