import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'
import styled from 'styled-components'

const mqMedium = `(min-width: 64em)`

export const flashlight_black =
  'https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_black.png'
export const flashlight_white =
  'https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_white.png'

const ThemeToggleButton = styled.button`
  border: none;
  padding: 0;
  margin: 0 3%;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  background: transparent;
  transform: scaleX(-1);
  @media ${mqMedium} {
    margin: 0;
  }
  &:active,
  &:focus {
    outline: none;
  }
`

const IconImage = styled.img`
  height: 35px;
  @media ${mqMedium} {
    height: 50px;
  }
`

export const ThemeToggle = () => {
  const context = useContext(ThemeContext)
  const { theme, setTheme } = context
  const toggle = theme === 'dark' ? 'light' : 'dark'
  return (
    <ThemeToggleButton onClick={() => setTheme(toggle)}>
      {theme === 'light' ? (
        <IconImage
          src='https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_black.png'
          alt='dark mode'
        />
      ) : (
        <IconImage src='https://simplesthings.s3-us-west-2.amazonaws.com/flashlight_white.png' />
      )}
    </ThemeToggleButton>
  )
}
