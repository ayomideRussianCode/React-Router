import { NavLink } from 'react-router-dom'

export const Navbar = () => { 

    const navLinkStyles = ({isActive}) =>{
        return {
            fontWeight : isActive ? 'bold' : 'normal'
        }
    }
    
    return (
        <nav>
            <NavLink style = {navLinkStyles} to= '/'>
                Home
            </NavLink>
            <NavLink style={navLinkStyles} to= '/about'>
                About
            </NavLink>
            <NavLink style={navLinkStyles} to= '/blog'>
                Blog
            </NavLink>
            <NavLink style={navLinkStyles} to= '/contact'>
                Contact
            </NavLink>
            
            {/* Navlink receives an active class automatically */}
      
        </nav>
    )
}