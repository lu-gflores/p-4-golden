import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
// Images
import StoryBackground from '../images/story-background-image.jpg'
import heroBanner from '../images/story-images/story-title.gif'
import MidnightChannel from '../images/story-images/MidnightChannel.jpg'
import Exams from '../images/story-images/exams.jpg'

const useStyles = makeStyles(() => ({
    backgroundImage: {
        backgroundImage: `url(${StoryBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
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
        zIndex: 9999
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
    imageStyle1: {
        width: '100%',
        height: 400,
        borderRadius: '35px',
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
                        <img src={MidnightChannel} alt='Midnight Channel' className={classes.imageStyle1} />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Paper className={classes.paperSection1}>
                            <p>
                                This is a coming of age story that sets the protagonist and his friends on a journey kickstarted by a chain of serial murders. You
                                will meet kindred spirits, feel a sense of belonging, and confront the darker sides of one's self.
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
                                Attend Yasogami High School, where you will maintain an ordinary teenage social life. Listen to lectures, take exams, and join clubs to increase your social stats
                                (Courage, Knowledge, Expression, Understanding, and Diligence).
                                Along the way, forge bonds with your classmates. Who knows, it may lead down to a deeper relationship. Outside of school, pursue some hobbies or take a part-time job!
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

                    </Grid>
                    <Grid item md={6} xs={12}>

                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Story
