import React from 'react'
import { storiesOf } from '@storybook/react'
import { NotFoundPage } from '../../index'

storiesOf('NotFoundPage', module)
  .add('default', () => (
    <NotFoundPage />
  ))
