import PlayerShow from './PlayerShow';

const PlayerList = ({ players, updatePlayer, deletePlayer }) => (
    <>
        { players.map( p =>
            <PlayerShow 
                key={p.id}
                {...p}
                deletePlayer={deletePlayer}
                updatePlayer={updatePlayer}
            />
        )}
    </>
)

export default PlayerList;