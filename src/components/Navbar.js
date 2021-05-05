import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Fade from '@material-ui/core/Fade'
import '../styles/NavBar.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto'
    }
})


const Navbar = () => {
    const classes = useStyles()
    const [active, setActive] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    })

    const toggleDrawer = (anchor, open) => e => {
        if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) {
            return;
        }
        setActive({ ...active, [anchor]: open })
    }

    const list = anchor => (
        <div className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom'
        })}
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem button component={NavLink} to='/'>
                    <ListItemText primary='Home' />
                </ListItem>
                <ListItem button component={NavLink} to='/story'>
                    <ListItemText primary='Story' />
                </ListItem>
                <ListItem button component={NavLink} to='/characters'>
                    <ListItemText primary='Characters' />
                </ListItem>
            </List>
        </div>
    )


    // const handleClick = e => {
    //     setActive(e.currentTarget)
    // }
    // const handleClose = () => {
    //     setActive(null)
    // }
    return (
        <nav className='navbar'>
            {['left'].map(anchor => (
                <Fragment key={anchor} >
                    <Button onClick={toggleDrawer(anchor, true)}><i className="fas fa-tv"></i></Button>
                    <Drawer anchor={anchor} open={active[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
            {/* <Button aria-controls='simple-menu' aria-haspopup='true'>
                <i className="fas fa-tv"></i>
            </Button>
            <Menu id='fade-menu' anchorEl={active} keepMounted  onClose={handleClose} TransitionComponent={Fade}>
                <MenuItem button component={NavLink} to='/' onClick={handleClose}>Home</MenuItem>
                <MenuItem button component={NavLink} to='/story' onClick={handleClose}>Story</MenuItem>
                <MenuItem button component={NavLink} to='/characters' onClick={handleClose}>Characters</MenuItem>
            </Menu> */}
        </nav>
    )
}

export default Navbar
