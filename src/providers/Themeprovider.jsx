import React, { useState, createContext, useEffect } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [textSize, setTextSize] = useState(localStorage.getItem('text-size'));
  const [isSerif, setIsSerif] = useState(localStorage.getItem('serif'));
  const [letterSpacing, setLetterSpacing] = useState(localStorage.getItem('spacing'));

  useEffect(() => {
    if (theme === 'invert') {
      document.body.classList.remove('comfort', 'brown', 'blue');
      document.body.classList.add('invert');
    }
    else if (theme === 'comfort') {
      document.body.classList.remove('invert', 'brown', 'blue');
      document.body.classList.add('comfort');
    }
    else if (theme === 'brown') {
      document.body.classList.remove('invert', 'comfort', 'blue');
      document.body.classList.add('brown');
    }
    else if (theme === 'blue') {
      document.body.classList.remove('invert', 'comfort', 'brown');
      document.body.classList.add('blue');
    }
    else {
      document.body.classList.remove('invert', 'comfort', 'brown', 'blue');
    }

    localStorage.setItem('theme', theme);
  }, [theme])

  useEffect(() => {
    if (textSize === 'little') {
      document.body.classList.remove('big', 'large');
      document.body.classList.add('little');
    }
    else if (textSize === 'big') {
      document.body.classList.remove('little', 'large');
      document.body.classList.add('big');
    }
    else if (textSize === 'large') {
      document.body.classList.remove('little', 'big');
      document.body.classList.add('large');
    }
    else {
      document.body.classList.remove('little', 'big', 'large');
    }

    localStorage.setItem('text-size', textSize);
  }, [textSize])

  useEffect(() => {
    if (isSerif === 'serif') {
      document.body.classList.add('serif');
    }
    else {
      document.body.classList.remove('serif');
    }

    localStorage.setItem('serif', isSerif);
  }, [isSerif])

  useEffect(() => {
    if (letterSpacing === 'spacingMiddle') {
      document.body.classList.remove('spacingBig');
      document.body.classList.add('spacingMiddle');
    }
    else if (letterSpacing === 'spacingBig') {
      document.body.classList.remove('spacingMiddle');
      document.body.classList.add('spacingBig');
    }
    else {
      document.body.classList.remove('spacingMiddle', 'spacingBig');
    }

    localStorage.setItem('spacing', letterSpacing);
  }, [letterSpacing])

  return (
    <ThemeContext.Provider
      value={{
        color: [theme, setTheme],
        size: [textSize, setTextSize],
        serif: [isSerif, setIsSerif],
        spacing: [letterSpacing, setLetterSpacing]
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}