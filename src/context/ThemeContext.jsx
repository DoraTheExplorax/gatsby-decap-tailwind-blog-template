import * as React from "react"
import { createContext, useState } from "react"

const getInitialTheme = () => {
  const sessionTheme =
    typeof window !== `undefined` && sessionStorage.getItem("theme")
  const browserIsDark =
    typeof window !== `undefined` &&
    document.querySelector("html").getAttribute("data-theme") === "dark"

  /*   //Now Instantiate the daisy theme (it won't exist on first load)
  document
    .querySelector("html")
    .setAttribute(
      "data-theme",
      sessionTheme || (browserIsDark ? "dark" : "light")
    ) */

  if (sessionTheme) return sessionTheme
  else if (browserIsDark) return "dark"
  else return "light" //light if nothing else given
}

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, rawSetTheme] = useState(getInitialTheme)
  //const isDark = useRef(theme === "dark" ? true : false)

  const setTheme = value => {
    rawSetTheme(value)
    //now update in sessionStorage for next time
    sessionStorage.setItem("theme", theme)
    //now set it in the html (daisyUI theme)
    document.querySelector("html").setAttribute("data-theme", theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
