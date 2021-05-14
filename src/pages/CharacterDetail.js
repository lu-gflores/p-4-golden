import React, { useState, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ScrollTop from '../components/ScrollTop'
import { CharacterState } from '../utils/characterState'
const useStyles = makeStyles({
    backgroundContainer: {
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(255,250,64,1) 90%, rgba(248,137,25,1) 91%, rgba(255,255,255,1) 93%, rgba(40,67,199,1) 94%, rgba(20,251,7,1) 95%, rgba(232,131,131,1) 96%, rgba(74,220,226,1) 98%, rgba(253,223,55,1) 99%);',
    },
    charDesc: {
        border: '5px solid rgba(235, 40, 126, 100)',
        borderRadius: '30px',
        alignContent: 'justify'
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%'
    }
})
const CharacterDetail = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [characters, setCharacters] = useState(CharacterState)
    const [character, setCharacter] = useState(null)
    const classes = useStyles()
    //loading up character
    useEffect(() => {
        const currentChar = characters.filter((stateChar) => stateChar.url === url)
        setCharacter(currentChar[0])
    }, [characters, url])
    return (
        <>
            {character && (
                <Container maxWidth='false' className={classes.backgroundContainer}>
                    <Box>
                        <Grid container >
                            <Grid item xs={12}>
                                <Paper>
                                    <h2>{character.characterName}</h2>
                                </Paper>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <Paper className={classes.charDesc}>
                                    <h2>{character.title}</h2>
                                    <p>{character.description}</p>
                                </Paper>
                            </Grid>
                            <Grid item md={6} xs={12}>
                                <img className={classes.image} src={character.charImg} alt={character.characterName} />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box>
                        <Link to='/characters'><Button>Back</Button></Link>
                    </Box>
                    <ScrollTop />
                </Container>
            )}
        </>
    )
}

export default CharacterDetail
