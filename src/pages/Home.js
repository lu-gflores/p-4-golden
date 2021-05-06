import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Paper from '@material-ui/core/Paper'

import backgroundImage1 from '../images/backgroundimage-1.gif'
import '../styles/Home.css'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    gridListStyle: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden'
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
        paddingBottom: '1.2rem',
        textAlign: 'center',
        justifyContent: 'center',
        height: '100%',
        opacity: 0.8,
        background: '#000',
        color: '#fff'
    }
}))


const Home = () => {
    const classes = useStyles()

    return (
        <Container max-width='false' className='home-container'>
            <div className='hero-banner'></div>
            <Divider />
            <div className={classes.backgroundStyle}>
                <div className={classes.root}>
                    <Grid container spacing={3} alignContent='center' justifyContent='center'>
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
            </div>

            <section className={classes.gridListStyle}>
                <h2>Media</h2>
            </section>
        </Container>
    )
}

export default Home
