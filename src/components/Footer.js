import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import Atlus from '../images/logos/Atlus_Logo.png'
import Steam from '../images/logos/steam_logo_rev.png'
import PSVita from '../images/logos/vita.png'
const Footer = () => {
    return (
        <AppBar position='static' className='main-footer'>
            <Container maxWidth='md'>
                <Toolbar>
                    <img src={Atlus} alt='Atlus Co.' />
                    <img src={Steam} alt='Steam' />
                    <img src={PSVita} alt='PS Vita' />
                    &copy; 2021 lu-gflores
            </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Footer
