import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import ScrollTop from '../components/ScrollTop'

// Images
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
        // background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${CharactersBG})`,
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        // backgroundPosition: 'center',
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(74,220,226,1) 2%, rgba(232,131,131,1) 4%, rgba(40,67,199,1) 5%, rgba(20,251,7,1) 7%, rgba(255,255,255,1) 8%, rgba(248,137,25,1) 9%, rgba(253,223,55,1) 11%, rgba(255,250,64,1) 100%);',
        width: '100%',
    },
    characterImageStyle_1: {
        maxWidth: '100%',
        maxHeight: 500,
        transform: 'rotate(3deg)'
    },
    characterImageStyle_2: {
        maxWidth: '100%',
        maxHeight: 500,
        transform: 'rotate(-3deg)'
    },
    imageResize: {
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'rotate(-3deg)'
    },
    titleStyle: {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${CharactersBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: 'auto',
        fontSize: '1.2rem',
        color: '#fff',
        border: '5px solid rgba(235, 40, 126, 100)',
        padding: '1.2rem',
        borderRadius: '10% 10% / 10% 40%',
        marginBottom: '1rem',
        textAlign: 'center'
    },
    paperStyle_1: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgb(156,203,227)',
        padding: '1.5rem',
        marginTop: '3rem',
        textDecoration: 'none',
        fontSize: '1.2rem',
        borderRadius: '30px',
        transform: 'rotate(3deg)',
        color: '#004f77',
        textAlign: 'center',
    }

}))
const Characters = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='lg' className={classes.backgroundImage}>
            <Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.titleStyle}>
                            <h1>Characters</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <Link to='/characters/protagonist'>
                                <h1>Protagonist</h1>
                                <h2>Arcana: <em>The Fool</em></h2>
                            </Link>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img className={classes.characterImageStyle_1} src={protagonist} alt='Protagonist' />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/yosuke-hanamura'>
                            <img className={classes.characterImageStyle_2} src={yosuke} alt={'Yosuke Hanamura'} />
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Yosuke Hanamura</h1>
                            <h2>Arcana: <em>The Magician</em></h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Chie Satonaka</h1>
                            <h2>Arcana: <em>The Chariot</em></h2>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/chie-satonaka'>
                            <img className={classes.characterImageStyle_1} src={chie} alt='Chie Satonaka' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/yukiko-amagi'>
                            <img className={classes.characterImageStyle_2} src={yukiko} alt={'Yukiko Amagi'} />
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Yukiko Amagi</h1>
                            <h2>Arcana: <em>The Priestess</em></h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Kanji Tatsumi</h1>
                            <h2>Arcana: <em>The Emperor</em></h2>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/kanji-tatsumi'>
                            <img className={classes.imageResize} src={kanji} alt='Kanji Tatsumi' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/rise-kujikawa'>
                            <img className={classes.characterImageStyle_2} src={rise} alt={'Rise Kujikawa'} />
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Rise Kujikawa</h1>
                            <h2>Arcana: <em>The Lovers</em></h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Teddie</h1>
                            <h2>Arcana: <em>The Star</em></h2>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/teddie'>
                            <img className={classes.characterImageStyle_1} src={teddie} alt='teddie' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/naoto-shirogane'>
                            <img className={classes.characterImageStyle_2} src={naoto} alt={'Naoto Shirogane'} />
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Naoto Shirogane</h1>
                            <h2>Arcana: <em>The Fortune</em></h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Igor</h1>
                            <h2><em>Proprietor of the Velvet Room</em></h2>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/igor'>
                            <img className={classes.characterImageStyle_1} src={igor} alt='igor' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/margaret'>
                            <img className={classes.characterImageStyle_2} src={margaret} alt={'Margaret'} />
                        </Link>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Margaret</h1>
                            <h2><em>Velvet Room Attendant</em></h2>
                            <h2>Arcana:<em>The Empress</em></h2>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperStyle_1}>
                            <h1>Marie</h1>
                            <h2>Arcana: <em>The Aeon</em></h2>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Link to='/characters/marie'>
                            <img className={classes.characterImageStyle_1} src={marie} alt='marie' />
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <ScrollTop />
        </Container>
    )
}

export default Characters
