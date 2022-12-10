import { Card, ListGroup, Button } from "react-bootstrap";
import { DeleteButton, PlayerCard } from "../shared/styles/PlayerCardStyles";

const PlayerShow = ({ id, username, age, console, online_status, deletePlayer, updatePlayer}) => (
    <>
        {/* <h3>{username}</h3>
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
        </ul> */}

        <PlayerCard style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Header>{username}</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                    <ListGroup.Item>Console: {console}</ListGroup.Item>
                    <ListGroup.Item>Online Status: {online_status}</ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <DeleteButton 
                        onClick={() => deletePlayer(id)}
                    >
                        Danger
                    </DeleteButton>
                </Card.Footer>
            </Card.Body>
        </PlayerCard>
    </>
)

export default PlayerShow;