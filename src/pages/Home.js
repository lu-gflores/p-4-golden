import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import backgroundImage1 from '../images/backgroundimage-1.gif'
import '../styles/Home.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    backgroundStyle: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage1})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        padding: '10rem'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        backgroundColor: `linear-gradient(rgb(253,250,75), rgb(54,53,50))`
    }
}))


const Home = () => {
    const classes = useStyles()

    return (
        <Container max-width='xl' className='home-container'>
            <div className='hero-banner'></div>
            <Divider />
            <div className={classes.backgroundStyle}>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}><em>"You can now enjoy the masterpiece in its best form"</em> - PCMag</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}><em>"A massive JRPG that looks better than ever on PC"</em> - Game Rant</Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={classes.paper}><em>"...A capivating JRPG, marrying slice-of-life drama with stylish demon battling"</em> - PC Gamer</Paper>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    )
}

export default Home
