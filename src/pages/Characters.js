import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import CharactersBG from '../images/charactersbg.jpg'

const useStyles = makeStyles(() => ({
    backgroundImage: {
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url(${CharactersBG})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
    }

}))
const Characters = () => {
    const classes = useStyles()
    return (
        <Container maxWidth='false' className={classes.backgroundImage}>
            <h1>Characters</h1>
        </Container>
    )
}

export default Characters
