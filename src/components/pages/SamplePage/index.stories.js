import React from 'react'
import { storiesOf } from '@storybook/react'
import { SamplePage } from '../../index'

storiesOf('SamplePage', module)
  .add('default', () => (
    <SamplePage />
  ))
