import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CharactersBG from '../images/charactersbg.jpg'
import protagonist from '../images/characters/Yu_Narukami_render.png'
import yosuke from '../images/characters/Yosuke_Hanamura_render.png'
import chie from '../images/characters/Chie_Satonaka_render.png'
import yukiko from '../images/characters/Yukiko_Amagi_render.png'
import kanji from '../images/characters/Kanji_Tatsumi_render.png'
import rise from '../images/characters/Rise_Kujikawa_render.png'
import teddie from '../images/characters/Teddie_render.png'
import naoto from '../images/characters/Naoto_Shirogane_render.png'
import igor from '../images/characters/IgorPersona3.png'
import margaret from '../images/characters/Margaret_Render.png'
import marie from '../images/characters/Marie_portrait.png'


const useStyles = makeStyles(() => ({
    backgroundImage: {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${CharactersBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
    },
    title: {
        textAlign: 'center'
    }

}))
const Characters = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='false' className={classes.backgroundImage}>
            <Box>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className={classes.title}>Characters</h1>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <Link to='/characters/protagonist'>
                            <img src={protagonist} alt='Protagonist' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Characters
