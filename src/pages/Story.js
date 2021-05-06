import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

import StoryBackground from '../images/story-background-image.jpg'

const useStyles = makeStyles(() => ({
    coverImage: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)), url(${StoryBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh'
    }
}))

const Story = () => {
    const classes = useStyles()
    return (
        <Container className={classes.coverImage}>
            <Box>
                <h1>Story</h1>
            </Box>
        </Container>
    )
}

export default Story
