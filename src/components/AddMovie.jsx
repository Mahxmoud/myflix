import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap';

function AddMovie(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState(
        {
            title: "",
            description:
                "",
            posterUrl:
                "",
            rate: 0,
            trailerUrl:
                ""
        }
    )

    return (
        <>
            <Button variant="warning" onClick={handleShow} className='plus'>+</Button>
            <Modal
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new movie to the list</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form style={{ width: '80%', padding: '15px' }}>
                        <Form.Label>Movie Name</Form.Label>
                        <Form.Control type="text" placeholder="Movie Title..." onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })} />
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Poster URL</Form.Label>
                            <Form.Control type="text" placeholder="Poster URL..." onChange={(e) => setNewMovie({ ...newMovie, posterUrl: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicText">
                            <Form.Label>Trailer URL</Form.Label>
                            <Form.Control type="text" placeholder="Trailer URL..." onChange={(e) => setNewMovie({ ...newMovie, trailerUrl: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Rating</Form.Label>
                            <Form.Control as="select" onChange={(e) => setNewMovie({ ...newMovie, rate: Number(e.target.value) })}>
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Back
                    </Button>
                    <Button variant="warning" onClick={() => {
                        props.setFirstRender(false)
                        props.setAppNewMovie(newMovie)
                        handleClose()
                        setNewMovie('')
                    }}>Add</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie
// setAppNewMovie(
//     {}
// )
