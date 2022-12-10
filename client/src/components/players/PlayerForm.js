import { useState, useEffect } from 'react';
import { Form, Button, Container, Col, Row } from 'react-bootstrap';

const PlayerForm = ({ addPlayer}) => {
    
    const [player, setPlayer] = useState({ username: '', age: 0, console: '', online_status: false })

    const handleSubmit = (e) => {
        e.preventDefault()

        addPlayer(player)
        setPlayer({ username: '', age: 0, console: '', online_status: false })
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control  
                                name='username'
                                value={player.username}
                                onChange={(e) => setPlayer({ ...player, username: e.target.value })}
                                required
                                maxLength={20}
                                placeholder='Username (max: 20)' 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicAge">
                            <Form.Label>
                                Age
                            </Form.Label>
                            <Form.Control 
                                name='age'
                                type='number'
                                value={player.age}
                                onChange={(e) => setPlayer({ ...player, age: e.target.value })}
                                required
                                placeholder='Age'
                            />
                            <Form.Control 
                                name='age'
                                type="range"
                                min={18}
                                max={100}
                                value={player.age}
                                onChange={(e) => setPlayer({ ...player, age: e.target.value })}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Main Console</Form.Label>
                            <Form.Control 
                                name='console'
                                value={player.console}
                                onChange={(e) => setPlayer({ ...player, console: e.target.value })}
                                required
                                placeholder='Favorite Console'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Label>Online?</Form.Label>
                            <Form.Check 
                                name='online_status'
                                type='checkbox'
                                value={player.online_status}
                                onChange={(e) => setPlayer({ ...player, online_status: e.target.checked })}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
    )
}

export default PlayerForm;