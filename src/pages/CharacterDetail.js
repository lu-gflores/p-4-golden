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
    charName: {
        background: 'linear-gradient(90deg, rgba(249,223,31,1) 0%, rgba(74,220,226,1) 2%, rgba(232,131,131,1) 4%, rgba(40,67,199,1) 5%, rgba(20,251,7,1) 7%, rgba(255,255,255,1) 8%, rgba(248,137,25,1) 9%, rgba(253,223,55,1) 11%, rgba(255,250,64,1) 100%);',
        padding: '1rem 2rem 2rem 3rem',
        margin: '1rem 0 1.2rem 0',
        border: '5px solid #000',
        textAlign: 'justify',
        lineHeight: 1.3,
        fontSize: '1.3rem',
        boxShadow: '0 10px 6px -5px #01060d',
        transform: 'rotate(-2deg)',
    },
    charDesc: {
        background: 'linear-gradient(0deg, rgba(156,203,227,1) 9%, rgba(255,255,255,1) 100%)',
        border: '5px solid rgba(235, 40, 126, 100)',
        borderRadius: '30px',
        boxShadow: '0 10px 16px -6px #01060d',
        margin: '1.2rem 0 0 0',
        padding: '2.5rem',
        fontSize: '20px',
        alignContent: 'justify',
        transform: 'rotate(-2deg)',
    },
    image: {
        background: 'linear-gradient(90deg, rgba(253,223,55,1) 2%, rgba(255,250,64,1) 3%, rgba(225,236,55,1) 4%, rgba(255,255,255,1) 5%, rgba(20,251,7,1) 7%, rgba(74,220,226,1) 8%, rgba(40,67,199,1) 10%, rgba(248,137,25,1) 11%, rgba(249,223,31,1) 13%);',
        boxShadow: '0 10px 6px -5px #01060d',
        borderRadius: '25px',
        maxWidth: '100%',
        height: '100%'
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
                <Container maxWidth='lg' className={classes.backgroundContainer}>
                    <Box>
                        <Grid container spacing={2} >
                            <Grid item md={7} xs={12}>
                                <Paper className={classes.charName}>
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
