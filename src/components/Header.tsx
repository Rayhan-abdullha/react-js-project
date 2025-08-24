import React, { useContext } from 'react'
import logo from '../../public/assets/images/logo.svg'
import moon from '../../public/assets/images/icon-moon.svg'
import sun from '../../public/assets/images/icon-sun.svg'
import { ThemeContext } from '../context/ThemeContext'
const Header = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
 
  return (
      <header className='container mx-auto mt-5'>
          <div className='flex items-center justify-between p-2 bg-gray-300 dark:bg-slate-800 rounded-md'>
               <img className='w-25' src={logo} alt="logo" />
        {/* <img className='' src={sun} alt="sun" /> */}
          <button>
              {
                theme === 'dark' ? <img className='cursor-pointer bg-slate-600 p-2 rounded-md w-8' onClick={toggleTheme} src={sun} alt="theme toggle" /> : <img className='cursor-pointer bg-slate-200 p-2 rounded-md w-8' onClick={toggleTheme} src={moon} alt="theme toggle" />
              }
        </button>
          </div>
    </header>
  )
}

export default Header