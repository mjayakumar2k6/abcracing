import React from 'react'
import { storiesOf } from '@storybook/react'
import { Organism } from '../../index'

storiesOf('Organism', module)
  .add('default', () => (
    <Organism />
  ))
  .add('reverse', () => (
    <Organism reverse />
  ))
