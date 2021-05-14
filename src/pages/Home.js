import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import ScrollTop from '../components/ScrollTop'

import backgroundImage1 from '../images/backgroundimage-1.gif'
import screenshotData from '../utils/ScreenshotData'
import '../styles/Home.css'
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    gridListRoot: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: '#FFFB41',
    },
    gridList: {
        width: '100%',
        height: 'auto',
    },
    backgroundStyle: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        padding: '10rem'
    },
    paper: {
        padding: theme.spacing(2),
        width: 210,
        height: 150,
        lineHeight: 1.5,
        textAlign: 'center',
        opacity: 0.7,
        background: '#000',
        color: '#fff'
    },
    newContentPaper: {
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(74,220,226,1) 2%, rgba(232,131,131,1) 4%, rgba(40,67,199,1) 5%, rgba(20,251,7,1) 7%, rgba(255,255,255,1) 8%, rgba(248,137,25,1) 9%, rgba(253,223,55,1) 11%, rgba(255,250,64,1) 100%);',
        border: '5px solid #fff',
        textAlign: 'center',
        padding: '1rem',
        lineHeight: 1.5,
        fontSize: '1.3rem',
        transform: 'rotate(-3deg)',
    },
    headerText: {
        WebkitTextStroke: '1px #fff',
        WebkitTextFillColor: '#000'
    }
}))

const Home = () => {
    const classes = useStyles()
    const theme = useTheme()
    const exSmallScreen = useMediaQuery(theme.breakpoints.only('xs'))
    const smallScreen = useMediaQuery(theme.breakpoints.only('sm'))
    const mediumScreen = useMediaQuery(theme.breakpoints.only('md'))
    const largeScreen = useMediaQuery(theme.breakpoints.only('lg'))
    const exLargeScreen = useMediaQuery(theme.breakpoints.only('xl'))
    const screenWidth = () => {
        if (exLargeScreen) return 4;

        else if (largeScreen) return 3;

        else if (mediumScreen) return 2;

        else return 1;
    }

    return (
        <Container maxWidth='false'>
            <div className='hero-banner'></div>
            <Divider />
            <section className={classes.backgroundStyle}>
                <div className={classes.root}>
                    <Grid container spacing={2} alignContent='center' justify='center'>
                        <Grid item md={4}>
                            <Paper className={classes.paper}><em>"You can now enjoy the masterpiece in its best form"</em> <br /> <p> - PCMag</p></Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={classes.paper}><em>"A massive JRPG that looks better than ever on PC"</em> <br /> <p>- Game Rant </p></Paper>
                        </Grid>
                        <Grid item md={4}>
                            <Paper className={classes.paper}><em>"...A capivating JRPG, marrying slice-of-life drama with stylish demon battling"</em><br /><p>- PC Gamer</p> </Paper>
                        </Grid>
                    </Grid>
                </div>
            </section>

            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.newContentPaper}>
                            <h1 className={classes.headerText}>What's in store</h1>
                            <p>
                                Originally released on the Playstation 2 in 2008, Shin Megami Tensei: Persona 4 has received critical acclaim for its gameplay, story, characters, and soundtrack.
                                Persona 4 Golden is an enhanced version of the original, adding new story and gameplay elements, new Personas, new endings, and visual elements. It is currently released
                                on PS Vita and PC via Steam.
                            </p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>

            <section className={classes.gridListRoot}>
                <h1 className='media-title'>Media</h1>
                <GridList cellHeight='auto' cols={screenWidth()} className={classes.gridList} >
                    {screenshotData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img className='screenshots' src={tile.img} alt={tile.alt} />
                        </GridListTile>
                    ))}
                </GridList>
            </section>
            <ScrollTop />
        </Container>
    )
}

export default Home
