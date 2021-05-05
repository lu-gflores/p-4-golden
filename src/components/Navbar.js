import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import '../styles/NavBar.css'
const Navbar = () => {
    const [active, setActive] = useState(null)
    const open = Boolean(active)

    const handleClick = e => {
        setActive(e.currentTarget)
    }
    const handleClose = () => {
        setActive(null)
    }

    return (
        <nav className='navbar'>
            <Button aria-controls='simple-menu' aria-haspopup='true' onClick={handleClick}>
                <i className="fas fa-tv"></i>
            </Button>
            <Menu id='fade-menu' anchorEl={active} keepMounted open={open} onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem button component={NavLink} to='/' onClick={handleClose}>Home</MenuItem>
                <MenuItem button component={NavLink} to='/story' onClick={handleClose}>Story</MenuItem>
                <MenuItem button component={NavLink} to='/characters' onClick={handleClose}>Characters</MenuItem>
            </Menu>
        </nav>
    )
}

export default Navbar
