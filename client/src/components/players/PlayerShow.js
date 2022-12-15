import { useState } from "react";
import { Card, ListGroup, Button, Modal } from "react-bootstrap";
import { DeleteButton, PlayerCard } from "../shared/styles/PlayerCardStyles";

const PlayerShow = ({ id, username, age, console, online_status, deletePlayer, updatePlayer}) => {
    const [ show, setShow ] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return(
        <>
            <PlayerCard style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Header>{username}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Age: {age}</ListGroup.Item>
                        <ListGroup.Item>Console: {console}</ListGroup.Item>
                        <ListGroup.Item>Online Status: {online_status}</ListGroup.Item>
                    </ListGroup>
                    <Card.Footer>
                        <Button onClick={handleShow}>
                            View
                        </Button>
                        <DeleteButton 
                            onClick={() => deletePlayer(id)}
                        >
                            Danger
                        </DeleteButton>
                    </Card.Footer>
                </Card.Body>
            </PlayerCard>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{username}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            Age: {age}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Main Console: {console}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Online Status: {online_status ? "Online" : "Offline"}
                        </ListGroup.Item>
                    </ListGroup>
                    <Modal.Title>
                        Games
                    </Modal.Title>
                </Modal.Body>
                <Modal.Footer variant="light">
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="success">
                        Invite Player
                    </Button>
                </Modal.Footer>
            </Modal>
        </>    

    )
}

export default PlayerShow;