import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Paper from '@material-ui/core/Paper'

import ScrollTop from '../components/ScrollTop'
// Images
import StoryBackground from '../images/story-background-image.jpg'
import heroBanner from '../images/story-images/story-title.gif'
import MidnightChannel from '../images/story-images/MidnightChannel.jpg'
import Exams from '../images/story-images/exams.jpg'
import Encounter from '../images/story-images/encounter.jpg'
import Persona from '../images/story-images/persona-render.png'
import Fusion from '../images/story-images/fusion.jpg'
import SocialLinks from '../images/story-images/social-link.jpg'

const useStyles = makeStyles(() => ({
    backgroundImage: {
        backgroundImage: `url(${StoryBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
    },
    cardRoot: {
        width: '100%',
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgba(235, 40, 126, 100)',
    },
    cardMedia: {
        height: 350,
        width: '100%'
    },
    storyTitle: {
        padding: '5.5rem 0 2.3rem 0',
        textAlign: 'center',
        fontSize: '7em',
        textDecoration: 'underline',
        opacity: 0.5
    },
    heroBanner: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${heroBanner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '10% 10% / 10% 40%',
        width: '100%',
        height: '60vh'
    },
    paperIntro: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgb(156,203,227)',
        padding: '1.5rem',
        marginBottom: '1rem',
        fontSize: '1.2rem',
        borderRadius: '30px',
        transform: 'rotate(3deg)',
        color: '#004f77',
        zIndex: 5
    },
    paperSection1: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgba(235, 40, 126, 100)',
        padding: '1.5rem',
        marginTop: '1.2rem',
        marginBottom: '1rem',
        fontSize: '1.2rem',
        borderRadius: '30px',
        transform: 'rotate(-3deg)',
        color: '#004f77',
    },
    headerStyle: {
        textAlign: 'center',
        fontSize: '48px',
        textDecoration: 'underline',
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgba(235, 40, 126, 100)',
        borderRadius: '30px',
    },
    imageStyle1: {
        width: '100%',
        height: 400,
        borderRadius: '35px',
        border: '5px solid rgb(156,203,227)',
        alignContent: 'center',
        transform: 'rotate(-3deg)',
    },
    imageStyle2: {
        width: '100%',
        height: 350,
        border: '5px solid rgba(235, 40, 126, 100)',
        borderRadius: '35px',
        alignContent: 'center',
        transform: 'rotate(3deg)',
    }
}))

const Story = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='false' className={classes.backgroundImage}>
            <div className={classes.heroBanner}>
                <h1 className={classes.storyTitle}>Story</h1>
            </div>
            <Box>
                <Paper className={classes.paperIntro}>
                    <p>
                        A rumor around school says that by watching a TV screen at midnight on a rainy night, the face of your soulmate will be revealed.
                        However, a chain of murders seems to be connected to the rumor. Therefore, you must gather up a team to brave the strange world
                        inside the TV to solve this mystery.
                    </p>
                </Paper>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <img src={MidnightChannel} alt='Midnight Channel' className={classes.imageStyle1} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperSection1}>
                            <p>
                                This is a coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders.
                                You will meet kindred spirits, feel a sense of belonging, and confront the darker sides of one's self.
                            </p>
                        </Paper>
                    </Grid>

                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperIntro}>
                            <p>
                                Attend Yasogami High School, where you will maintain an ordinary teenage social life.
                                Listen to lectures, take exams, and join clubs to increase your social stats
                                (Courage, Knowledge, Expression, Understanding, and Diligence).
                                Along the way, forge bonds with your classmates. Who knows, it may lead down to a deeper relationship. Outside of school,
                                pursue some hobbies or take a part-time job!
                            </p>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img src={Exams} alt='Taking the exams' className={classes.imageStyle2} />
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <img src={Encounter} alt='Turn-based encounter' className={classes.imageStyle1} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperSection1}>
                            <p>Outside of your social life, dive into the TV world to solve the mysterious murders that are happening in Inaba. Defeat the denizens known as Shadows by
                            manifesting avatars known as Personas.</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <h1 className={classes.headerStyle}>What are Personas?</h1>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardMedia className={classes.cardMedia} image={Persona} title='Izanagi' />
                            <CardContent>
                                <Typography gutterBottom variant='h2' component='h2' align='center'>
                                    Persona
                                </Typography>
                                <p>
                                    Manifestations of the user's personality, often referred to as a mask. Similar to Shadows, where Shadows are malevolent manifestations of one's inner thoughts, whereas
                                    Personas are the same feelings, but are tamed and trained by its users. By defeating Shadows in the Midnight Channel, you will obtain and evolve Personas in order to solve the
                                    mystery behind the Midnight Channel.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardMedia className={classes.cardMedia} image={Fusion} title='Fusing Personas through menu' />
                            <CardContent>
                                <Typography gutterBottom variant='h2' component='h2' align='center'>
                                    Fusion
                                </Typography>
                                <p>
                                    Obtaining and growing personas isn't always enough. After collecting enough personas, visit the Velvet Room to fuse specific ones! With the right personas, you can fuse even
                                    stronger ones with devastating or resourceful abilities that will make the adventure much easier.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item md={4} xs={12}>
                        <Card className={classes.cardRoot}>
                            <CardMedia className={classes.cardMedia} image={SocialLinks} title='Bonding with Yosuke' />
                            <CardContent>
                                <Typography gutterBottom variant='h2' component='h2' align='center'>
                                    Social Links
                                </Typography>
                                <p>
                                    Outside of combat, you can build relationships with your fellow teammates, classmates, and citizens of Inaba through Social Links. By creating and growing Social Links, personas you
                                    fuse will be even stronger prior to forming a Social Link.
                                </p>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
            <ScrollTop />
        </Container>
    )
}

export default Story
