
const PlayerShow = ({ id, username, age, console, online_status, deletePlayer, updatePlayer}) => (
    <>
        <h3>{username}</h3>
        <button onClick={() => deletePlayer(id)}>x</button>
        <ul>
            <li>
                Age: {age}
            </li>
            <li>
                Console: {console}
            </li>
            <li>
                Status: {online_status ? "Online" : "Offline"}
            </li>
        </ul>
    </>
)

export default PlayerShow;