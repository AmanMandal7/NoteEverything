import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import './LandingPage.css'

const LandingPage = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            navigate('./mynotes')
        }
    }, [navigate])

    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div className='buttonContainer'>
                            <Link to='/login'>
                                <Button size="lg mx-3" className='landingbutton'>LOGIN</Button>
                            </Link>
                            <Link to='/register'>
                                <Button size="lg" className='landingbutton' variant='outline-primary'>SIGNUP</Button>
                            </Link>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default LandingPage
