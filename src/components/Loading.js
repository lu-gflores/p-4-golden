import React from 'react'
import { motion } from 'framer-motion'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
    loaderContainer: {
        padding: '5rem 5rem'
    }
}))
const Loading = () => {
    const classes = useStyles()

    return (
        <Container maxWidth={false}>
            <Grid container>
                <Grid item xs={12}>
                    <div className={classes.loaderContainer}>Now loading...</div>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Loading
