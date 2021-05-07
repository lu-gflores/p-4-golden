import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Paper from '@material-ui/core/Paper'

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
        width: 200,
        height: 150,
        lineHeight: 1.5,
        textAlign: 'center',
        opacity: 0.7,
        background: '#000',
        color: '#fff'
    }
}))

const Home = () => {
    const classes = useStyles()

    return (
        <Container max-width='false'>
            <div className='hero-banner'></div>
            <Divider />
            <div className={classes.backgroundStyle}>
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
            </div>

            <section className={classes.gridListRoot}>
                <h1 className='media-title'>Media</h1>
                <GridList cellHeight='auto' className={classes.gridList} cols={4}>
                    {screenshotData.map(tile => (
                        <GridListTile key={tile.img}>
                            <img className='screenshots' src={tile.img} alt={tile.alt} />
                        </GridListTile>
                    ))}
                </GridList>
            </section>
        </Container>
    )
}

export default Home
