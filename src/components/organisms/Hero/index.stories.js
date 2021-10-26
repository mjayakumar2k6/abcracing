import React from 'react'
import { storiesOf } from '@storybook/react'
import { Hero } from '../../index'

storiesOf('Hero', module)
  .add('default', () => (
    <Hero />
  ))
