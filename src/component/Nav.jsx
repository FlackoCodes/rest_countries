import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { FaMoon } from "react-icons/fa"

const Nav = () => {

    const [ theme, seTheme ] = useState('light')

    useEffect(() =>{
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [theme])


    const toggleDarkmode = ()=>{
        seTheme(theme == 'dark' ? 'light' : 'dark')
    }
  return (
        <nav> 
            <div className="container">
                <div>
                    <NavLink  className='nav-link' to={'/'} >
                    <h2>Where in the world?</h2>
                    </ NavLink >
                </div>
                <div
                onClick={toggleDarkmode}
                className="flex gap-2 items-center cursor-pointer"
                    >
                    <FaMoon />
                    <h3>Dark Mode</h3>
                </div>
            </div>
        </nav>
  )
}

export default Nav



 