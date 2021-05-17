import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, FormGroup, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader";
import Message from "../Message";
import FormContainer from "../FormContainer";
import { getUserDetails, updateUser } from "../../actions/userActions";
import { USER_UPDATE_RESET } from '../../constants/userConstants'


function EditUserScreen({ match, history }) {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [isActive, setIsActive] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { error, loading, user } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { error: errorUpdate, loading: loadingUpdate, success: successUpdate } = userUpdate

    useEffect(() => {

        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/users')
        } else {

            if (!user.name || user._id !== Number(userId)) {
                dispatch(getUserDetails(userId))
            } else {
                setName(user.name)
                setEmail(user.email)
                setIsAdmin(user.isAdmin)
                setIsActive(user.isActive)
            }
        }

    }, [user, userId, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: user._id, name, email, isAdmin, isActive }))

    }
    return (
        <div>
            <Container>
                <Link to='/admin/users/'>
                    Go Back
            </Link>
                <FormContainer>
                    <h1>Edit User</h1>
                    {loadingUpdate && <Loader />}
                    {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                    {loading
                        ? <Loader />
                        : error
                            ? (<Message variant='danger'>{error}</Message>)
                            : (
                                <Form onSubmit={submitHandler}>

                                    <Form.Group controlId='name'>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type='name'
                                            placeholder='Enter Name'
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='email'>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type='email'
                                            placeholder='Enter Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        >
                                        </Form.Control>
                                    </Form.Group>

                                    <FormGroup controlId='isadmin'>
                                        <Form.Check
                                            type='checkbox'
                                            label='Is Admin'
                                            checked={isAdmin}
                                            onChange={(e) => setIsAdmin(e.target.checked)}
                                        >

                                        </Form.Check>
                                    </FormGroup>

                                    <FormGroup controlId='isactive'>
                                        <Form.Check
                                            type='checkbox'
                                            label='Is Active'
                                            checked={isActive}
                                            onChange={(e) => setIsActive(e.target.checked)}
                                        >

                                        </Form.Check>
                                    </FormGroup>

                                    <Button type='submit' variant='primary'>
                                        Update
                                </Button>

                                </Form>

                            )}
                </FormContainer>
            </Container>
        </div>

    )
}

export default EditUserScreen
