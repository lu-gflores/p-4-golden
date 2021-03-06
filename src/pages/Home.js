import React, { useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Box from '@material-ui/core/Box'
import Paper from '@material-ui/core/Paper'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import ScrollTop from '../components/ScrollTop'
// images
import backgroundImage1 from '../images/backgroundimage-1.gif'
import originalImage from '../images/original.jpg'
import introArt from '../images/persona-intro.jpg'
import screenshot_1 from '../images/screenshots/screenshot-2.jpg'
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
    },
    gridList: {
        width: '100%',
        height: 'auto',
        zIndex: -1
    },
    modal: {
        display: 'flex',
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
        border: '5px solid #000',
        textAlign: 'center',
        padding: '1rem 2rem 2rem 3rem',
        lineHeight: 1.3,
        fontSize: '1.3rem',
        boxShadow: '0 10px 6px -5px #01060d',
        transform: 'rotate(3deg)',
    },
    newContentPaper_2: {
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(255,250,64,1) 90%, rgba(248,137,25,1) 91%, rgba(255,255,255,1) 93%, rgba(40,67,199,1) 94%, rgba(20,251,7,1) 95%, rgba(232,131,131,1) 96%, rgba(74,220,226,1) 98%, rgba(253,223,55,1) 99%);',
        border: '5px solid #000',
        textAlign: 'center',
        padding: '1rem 2rem 2rem 3rem',
        lineHeight: 1.3,
        fontSize: '1.3rem',
        boxShadow: '0 10px 6px -5px #01060d',
        transform: 'rotate(-1.5deg)',
    },
    introImage: {
        width: '100%',
        height: 280,
        border: '5px solid #000',
        boxShadow: '0 10px 6px -5px #01060d',
        transform: 'rotate(-1deg)',
    },
    imagesPaper_1: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgba(235, 40, 126, 100)',
        borderRadius: '10px',
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'rotate(3deg)',
    },
    imagesPaper_2: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgb(156,203,227)',
        borderRadius: '10px',
        maxWidth: '100%',
        maxHeight: '100%',
        transform: 'rotate(-3deg)',
    },
    headerText: {
        textAlign: 'center',
        WebkitTextStroke: '1px #fff',
        WebkitTextFillColor: '#000'
    }
}))

const Home = () => {
    const classes = useStyles()
    const theme = useTheme()
    const [open, setOpen] = useState(false)
    const exSmallScreen = useMediaQuery(theme.breakpoints.only('xs'))
    const smallScreen = useMediaQuery(theme.breakpoints.only('sm'))
    const mediumScreen = useMediaQuery(theme.breakpoints.only('md'))
    const largeScreen = useMediaQuery(theme.breakpoints.only('lg'))
    const exLargeScreen = useMediaQuery(theme.breakpoints.only('xl'))

    // modal function
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    // makes screenshots responsive to screen size
    const screenWidth = () => {
        if (exLargeScreen) return 4;

        else if (largeScreen) return 3;

        else if (mediumScreen) return 2;

        else return 1;
    }

    return (
        <Container maxWidth='lg'>
            <div className='hero-banner'></div>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.newContentPaper}>
                            <h1 className={classes.headerText}>One of Playstation 2's Biggest RPGs makes a return on modern tech!</h1>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={introArt} className={classes.introImage} alt='Investigation team walking along' />
                    </Grid>
                </Grid>
            </Box>
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
                <Grid container spacing={3}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.newContentPaper}>
                            <h1 className={classes.headerText}>What's in stored</h1>
                            <p>
                                Originally released on the Playstation 2 in 2008 here in the West, <em><strong>Shin Megami Tensei: Persona 4</strong></em> has received critical acclaim for its gameplay, story, characters, and soundtrack.
                                <em><strong>Persona 4 Golden </strong></em>is an enhanced version of the original, adding new story and gameplay elements, updated visuals, and more! It is currently released
                                on PS Vita and PC via Steam.
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={originalImage} alt='Ps2 original screenshot of dialogue' className={classes.imagesPaper_1} />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        {/* Placeholder image */}
                        <img src={screenshot_1} alt='team attack' className={classes.imagesPaper_2} />
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Paper className={classes.newContentPaper}>
                            <h1 className={classes.headerText}>What's Persona 4 Golden?</h1>
                            <p>A turn-based role-playing game blended with life simulation elements.
                            It is the fifth entry of the <em>Persona</em> series, with the <em>Persona</em> series being largest spin-off series of the <em>Megami Tensei</em> series. Despite the number 4, each entry is a stand-alone, so you don't need to
                            have played the previous games, although you may find some interesting references!</p>
                        </Paper>
                    </Grid>

                    <Grid item md={6} xs={12}>
                        <Paper className={classes.newContentPaper}>
                            <h1 className={classes.headerText}>Features</h1>
                            <p>
                                Whether you are new or a veteran, <em><strong>Persona 4 Golden</strong></em> offers something new for everyone!
                            </p>
                            <ul>
                                <li>New Animated Cutscenes</li>
                                <li>A new character</li>
                                <li>New Personas</li>
                                <li>Online Dungeon Assists</li>
                            </ul>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={screenshot_1} alt='team attack' className={classes.imagesPaper_2} />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container >
                    <Grid item xs={12}>
                        <Paper className={classes.newContentPaper_2}>
                            <h1 className={classes.headerText}>Screenshots</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <section className={classes.gridListRoot}>
                <GridList cellHeight='auto' cols={screenWidth()} className={classes.gridList} >
                    {screenshotData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img onClick={handleOpen} className='screenshots' src={tile.img} alt={tile.alt} />
                        </GridListTile>
                    ))}
                </GridList>
                {/* <Modal className={classes.modal} open={open} onClose={handleClose} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
                    <Fade in={open}></Fade>
                </Modal> */}
            </section>
            <Box>
                <Grid container>
                    <Grid item xs={12}>
                        <Paper className={classes.newContentPaper_2}>
                            <h1 className={classes.headerText}>Check out its spin-offs!</h1>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <ScrollTop />
        </Container>
    )
}

export default Home
