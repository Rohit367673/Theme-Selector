import React, { useEffect, useState } from 'react'

import { ThemeProvider } from './Theme'
import Btn from './Btn'
import Card from './Card'


function App2() {
  const[ThemeMode,setTheme]=useState('light')

  const lightTheme =()=>{
    setTheme("light")

  }
  const darkTheme=()=>{
    setTheme("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(ThemeMode)
  },[ThemeMode])

  return (
<>
<ThemeProvider value={{ThemeMode, lightTheme, darkTheme}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <Btn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

  </ThemeProvider>







</>
  )
}

export default App2

