import React from 'react'
import { storiesOf } from '@storybook/react'
import { FeatureList } from '../../index'

storiesOf('FeatureList', module)
  .add('default', () => (
    <FeatureList />
  ))
