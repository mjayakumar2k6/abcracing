// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { storiesOf } from '@storybook/react'
import { LatestPage } from '../../index'

storiesOf('LatestPage', module)
  .add('default', () => (
    <LatestPage />
  ))
