import { useState, useEffect } from 'react';

const PlayerForm = ({ addPlayer}) => {
    
    const [player, setPlayer] = useState({ username: '', age: 0, console: '', online_status: false })

    const handleSubmit = (e) => {
        e.preventDefault()

        addPlayer(player)
        setPlayer({ username: '', age: 0, console: '', online_status: false })
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    name='username'
                    value={player.username}
                    onChange={(e) => setPlayer({ ...player, username: e.target.value })}
                    required
                    maxLength={20}
                    placeholder='Username (max: 20)'
                />
                <input 
                    name='age'
                    type='number'
                    value={player.age}
                    onChange={(e) => setPlayer({ ...player, age: e.target.value })}
                    required
                    placeholder='Age'
                />
                <input 
                    name='age'
                    type="range"
                    min={18}
                    max={100}
                    value={player.age}
                    onChange={(e) => setPlayer({ ...player, age: e.target.value })}
                />
                <input 
                    name='console'
                    value={player.console}
                    onChange={(e) => setPlayer({ ...player, console: e.target.value })}
                    required
                    placeholder='Favorite Console'
                />
                <label>Online? </label>
                <input 
                    name='online_status'
                    type='checkbox'
                    value={player.online_status}
                    onChange={(e) => setPlayer({ ...player, online_status: e.target.checked })}
                />

                <button type='submit'>
                    Submit
                </button>

            </form>
        </>
    )
}

export default PlayerForm;