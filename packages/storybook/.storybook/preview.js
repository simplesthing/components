import React from 'react'
import { ThemeProvider } from '../src/components/ThemeToggle/ThemeContext'
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons'

const withThemeProvider = (Story, context) => {
  return (
    <ThemeProvider>
      <Story {...context} />
    </ThemeProvider>
  )
}
export const decorators = [withThemeProvider]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
