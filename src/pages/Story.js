import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// Images
import StoryBackground from '../images/story-background-image.jpg'
import heroBanner from '../images/story-images/story-title.gif'
import MidnightChannel from '../images/story-images/MidnightChannel-Intro.jpg'

const useStyles = makeStyles(() => ({
    backgroundImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${StoryBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    },
    storyTitle: {
        textAlign: 'center',
        padding: '2.5rem',
        fontSize: '6em',
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
        borderRadius: '30px',
        transform: 'rotate(3deg)',
        color: '#004f77',
        zIndex: 9999
    },
    paperSection1: {
        background: `linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)`,
        border: '5px solid rgba(235, 40, 126, 100)',
        padding: '1.5rem',
        marginTop: '1.2rem',
        marginBottom: '1rem',
        borderRadius: '30px',
        transform: 'rotate(-3deg)',
        color: '#004f77',
    },
    introImage: {
        width: 400,
        height: 400,
        borderRadius: '35px',
        alignContent: 'center',
        opacity: 0.8
    }
}))

const Story = () => {
    const classes = useStyles()
    return (
        <Container className={classes.backgroundImage}>
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
                        <Paper className={classes.paperSection1}>
                            <p>
                                This is a coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders. You
                                will meet kindred spirits, feel a sense of belonging, and confront the darker sides of one's self.
                        </p>
                        </Paper>
                    </Grid>
                    <Grid item md={6} xs={12}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Story
