import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import FormContatiner from '../components/FormContainer'

import { login } from '../actions/userActions'

function LoginScreen({location, history}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch()


    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            history.push(redirect)
        }
    },[history, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (
        <FormContatiner>
            <h1>Вход</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Почта
                    </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >

                        </Form.Control>

                </Form.Group>

                <Form.Group controlId='password'>
                    <Form.Label>
                        Пароль
                    </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        </Form.Control>

                </Form.Group>
                
                <Button className="mt-3" type='submit' variant='outline-primary'>
                    Войти
                </Button>
                   
            </Form>

            <Row className='py-3'>
                <Col>
                    Новый клиент? <Link 
                    to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        Регистрация
                    </Link>

                </Col>
            </Row>
            
        </FormContatiner>
    )
}

export default LoginScreen
