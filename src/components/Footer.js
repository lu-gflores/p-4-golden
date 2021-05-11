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
        background: 'linear-gradient(#FFFB41, #000)',
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
                <Toolbar>
                    Site Created by Copyright&copy; 2021 lu-gflores
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
