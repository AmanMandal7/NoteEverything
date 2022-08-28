import React, { useEffect, useState } from 'react'
import { Accordion, Badge, Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import axios from "axios"

const MyNote = () => {

    const [notes, setNotes] = useState([]);

    const deleteHandler = (id) => {
        if (Window.confirm("Are you sure?")) {

        }
    }

    const fetchNotes = async () => {
        const { data } = await axios.get("/api/notes");
        setNotes(data);
    };
    console.log(notes);

    useEffect(() => {
        fetchNotes();
    }, [])

    return (
        <MainScreen title="Welcome back Aman Mandal...">
            <Link to="/createnote">
                <Button style={{ marginLeft: 10, marginBotton: 6 }} size="lg">Create New Note</Button>
            </Link>
            {
                notes.map(note => (

                    <Accordion key={note._id}>
                        <Card style={{ margin: "10px" }}>
                            <Card.Header style={{ display: 'flex' }}>
                                <span style={{
                                    color: 'black',
                                    textDecoration: 'none',
                                    flex: 1,
                                    cursor: 'pointer',
                                    alignSelf: 'center',
                                    fontSize: 18
                                }}>
                                    <Accordion.Toggle as={Card.Text} variant="link" eventKey="0">{note.title}</Accordion.Toggle>
                                </span>

                                <div>
                                    <Button href={`/note/${note._id}`}>Edit</Button>
                                    <Button variant='danger' className='mx-2' onClick={() => deleteHandler(note._id)}>Delete</Button>
                                </div>
                            </Card.Header>

                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <h4>
                                        <Badge variant='success'>Category - {note.category}</Badge>
                                    </h4>

                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {note.content}
                                        </p>
                                        <footer className="blockquote-footer">Created-on Date</footer>
                                    </blockquote>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))
            }



        </MainScreen>
    )
}

export default MyNote
