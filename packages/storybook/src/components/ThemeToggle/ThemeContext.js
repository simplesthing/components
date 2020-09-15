import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export const ThemeConsumer = ThemeContext.Consumer

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
