import { NavLink } from "react-router-dom"
import { FaMoon } from "react-icons/fa"

const Nav = () => {

  return (
    <nav>
        <div className="container">
            <div>
                <NavLink className='nav-link' to={'/'} >
                <h2>Where in the world?</h2>
                </ NavLink >
            </div>
            <div
            style={style}>
                <FaMoon />
                <h3>Dark Mode</h3>
            </div>
        </div>
    </nav>
  )
}

export default Nav

let style ={
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
    cursor: 'pointer',
}