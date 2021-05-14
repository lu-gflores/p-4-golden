import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import { makeStyles, useTheme } from '@material-ui/core/styles'

import Rating from '../images/logos/rating.jpg'
import Atlus from '../images/logos/Atlus_Logo.png'
import Steam from '../images/logos/steam_logo_rev.png'
import PSVita from '../images/logos/psvita.png'
import '../styles/Footer.css'
const useStyles = makeStyles(theme => ({
    footer: {
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(74,220,226,1) 2%, rgba(232,131,131,1) 4%, rgba(40,67,199,1) 5%, rgba(20,251,7,1) 7%, rgba(255,255,255,1) 8%, rgba(248,137,25,1) 9%, rgba(253,223,55,1) 11%, rgba(255,250,64,1) 100%);',
        display: 'flex',
        width: '100%',
        padding: '20px 0',
        alignContent: 'center'
    },
    paper: {
        display: 'flex'
    },
    esrbContent: {
        margin: 0,
        paddingLeft: '0.5rem',
        textAlign: 'left',
        listStyle: 'none',
        fontWeight: 'bold'
    },
    copyright: {
        textAlign: 'center',
        color: '#000'
    }
}))
const Footer = () => {
    const classes = useStyles()
    return (
        <AppBar position='static' className={classes.footer}>
            <Container maxWidth='md'>
                <Toolbar>
                    <Paper variant='outlined' square className={classes.paper}>
                        <img className='logo' src={Rating} alt='ESRB Mature Rating' />
                        {/* <ul className={classes.esrbContent}>
                            <li>Alcohol Reference</li>
                            <li>Animated Blood</li>
                            <li>Language</li>
                            <li>Partial Nudity</li>
                            <li>Sexual Themes</li>
                            <li>Violence</li>
                        </ul> */}
                    </Paper>
                    <img className='logo' src={Atlus} alt='Atlus Co.' />
                    <img className='logo' src={Steam} alt='Steam' />

                </Toolbar>
                <Toolbar className={classes.copyright}>
                    Site Created by Copyright&copy; 2021 lu-gflores
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
