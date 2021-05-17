import React, { Fragment, useState } from 'react'
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Button from '@material-ui/core/Button'
import '../styles/NavBar.css'

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
        zIndex: 9999,
    },
    ListItemText: {
        fontFamily: 'Fira Sans Extra Condensed',
        fontSize: '32px',
        fontWeight: '700',
        transform: 'rotate(-3deg)'
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
    const nodeRef = React.useRef(null)
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
            <List className='nav-background'>
                <ListItem button component={NavLink} to='/'>
                    <ListItemText classes={{ primary: classes.ListItemText }} primary='Home' />
                </ListItem>
                <ListItem button component={NavLink} to='/story'>
                    <ListItemText classes={{ primary: classes.ListItemText }} primary='Story' />
                </ListItem>
                <ListItem button component={NavLink} to='/characters'>
                    <ListItemText classes={{ primary: classes.ListItemText }} primary='Characters' />
                </ListItem>
            </List>
        </div>
    )

    return (
        <nav className='navbar'>
            {['left'].map(anchor => (
                <Fragment key={anchor} >
                    <Button onClick={toggleDrawer(anchor, true)}><motion.i whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="fas fa-tv"></motion.i></Button>
                    <Drawer anchor={anchor} open={active[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </Fragment>
            ))}
        </nav>
    )
}

export default Navbar
