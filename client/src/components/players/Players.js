import { useState, useEffect } from 'react';
import axios from 'axios';

import PlayerList from './PlayerList';
import PlayerForm from './PlayerForm';

const Players = () => {
    const [players, setPlayers] = useState([])
    const [adding, setAdd] = useState(false)

    useEffect( () => {
        axios.get('/api/players')
            .then( res => 
                setPlayers(res.data)
            )
            .catch( err => console.log(err))
    }, [])

    const addPlayer = (player) => {
        axios.post("/api/players", { player })
            .then ( res => {
                setPlayers([ ...player, res.data])
            })
            .catch( err => console.log(err) )
    }

    const updatePlayer = ( id, player ) => {
        axios.put(`/api/players/${id}`, { player })
            .then( res => {
                let newUpdatePlayers = players.map( p => {
                    if (p.id === id) {
                        return res.data
                    }
                    return p
                })
                setPlayers(newUpdatePlayers)
            })
            .catch( err => console.log( err ))
    }

    const deletePlayer = (id) => {
        axios.delete(`/api/players/${id}`)
        .then( res => {
            setPlayers( players.filter( p => p.id !== id))
        })
        .catch( err => console.log( err ))
    }

    return(
        <>
            <h1>All Players</h1>
            <PlayerForm 
                addPlayer={addPlayer}
            />
            <PlayerList 
                players={players}
                updatePlayer={updatePlayer}
                deletePlayer={deletePlayer}
            />
        </>
    )
}

export default Players;