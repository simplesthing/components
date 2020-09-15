import React, { useContext } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { ThemeContext } from './ThemeContext'
import styled from 'styled-components'

const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  button {
    padding-top: 10px;
  }
`

export default {
  title: 'ThemeToggle',
  component: ThemeToggle,
}

const Template = (args) => {
  const context = useContext(ThemeContext)
  const { theme, setTheme } = context
  const color = theme === 'dark' ? '#000' : '#fff'
  return (
    <Background bgColor={color}>
      <ThemeToggle {...args} />
    </Background>
  )
}

export const Default = Template.bind({})
