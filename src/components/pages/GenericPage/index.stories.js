import React from 'react'
import { storiesOf } from '@storybook/react'
import { GenericPage } from '../../index'

storiesOf('GenericPage', module)
  .add('default', () => (
    <GenericPage />
  ))
