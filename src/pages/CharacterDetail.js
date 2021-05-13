import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { CharacterState } from '../utils/characterState'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'

const CharacterDetail = () => {
    const history = useHistory()
    const url = history.location.pathname
    const [characters, setCharacters] = useState(CharacterState)
    const [character, setCharacter] = useState(null)

    //loading up character
    useEffect(() => {
        const currentChar = characters.filter((stateChar) => stateChar.url === url)
        setCharacter(currentChar[0])
    }, [characters, url])

    return (
        <>
            {character && (
                <Container maxWidth='false'>
                    <h2>{character.characterName}</h2>
                    <h3>{character.title}</h3>
                </Container>
            )}
        </>
    )
}

export default CharacterDetail
