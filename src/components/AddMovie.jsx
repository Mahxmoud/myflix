import React from 'react'
import { Form, Button, Card } from 'react-bootstrap'

export default function AddMovie() {
    return (
        <div>
            <Card style={{ width: '18rem', margin: '23px', backgroundColor: '#282C34' }} >
                <Form style={{ width: '80%', padding: '15px'}}>
                    <Form.Label>Movie Name</Form.Label>
                    <Form.Control type="email" placeholder="Movie name here" />
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>PosterUrl</Form.Label>
                        <Form.Control type="email" placeholder="Poster here" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Movie rating</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>


                    <Button variant="warning" type="submit">
                        add</Button>
                </Form></Card>

        </div>
    )
}
