import * as formik from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Row  from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';

const USER_REGEX : RegExp = /^[a-zA-z][a-zA-Z0-9-_]{3,15}$/;
const PWD_REGEX : RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{8,24}$/;
const EMAIL_REGEX : RegExp = /^\S+@\S+\.\S+$/;

export interface IRegistrationProps {
}

const Registration: React.FunctionComponent<IRegistrationProps>  = (props: IRegistrationProps) => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().label('First Name').min(2).required(),
        lastName: yup.string().label('Last Name').required(),
        username: yup.string().label('Username').matches(USER_REGEX, 'Username must be 4-15 chars in length').required(),
        password: yup.string().label('Password').matches(PWD_REGEX, 'Password must 8-24 chars in length, with 1 lower, 1 upper and special char !@#$').required(),
        email: yup.string().label('Email').matches(EMAIL_REGEX, 'Please enter valid email address').required()
    });

    // const emptyForm = (obj: Object) => {
    //     return Object.values(obj).every(v => (v === undefined) || (v.toString().length === 0));
    // }

    return (
    <div>
        <h2>Registration Form</h2>
        <Formik validationSchema={schema}
            onSubmit={console.log}
            validate={values => {
                const myerrors = {email: ''};
                if(!/\S+@\S+\.\S+/.test(values.email)) {
                   myerrors.email = 'Invalid email address' 
                }
            }}
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email: ''
            }}>
                {
                    ({handleSubmit, handleChange, values, touched, errors}) => (
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId='ctl-0'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" 
                                        name="firstName" 
                                        value={values.firstName} 
                                        onChange={handleChange}
                                        isValid={touched.firstName && !errors.firstName}
                                        isInvalid={touched.firstName && !!errors.firstName}/>
                                    <Form.Control.Feedback type='invalid'>{errors.firstName}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId='ctl-1'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" 
                                        name="lastName" 
                                        value={values.lastName} 
                                        onChange={handleChange}
                                        isValid={touched.lastName && !errors.lastName}
                                        isInvalid={touched.lastName && !!errors.lastName}/>
                                    <Form.Control.Feedback type='invalid'>{errors.lastName}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId='ctl-2'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" 
                                        value={values.email} onChange={handleChange}
                                        isValid={touched.email && !errors.email}
                                        isInvalid={touched.email && !!errors.email}/>
                                    <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId='ctl-3'>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" name="username" 
                                        value={values.username} onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={touched.username && !!errors.username}/>
                                    <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="4" controlId='ctl-4'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" 
                                        value={values.password} onChange={handleChange}
                                        isValid={touched.username && !errors.username}
                                        isInvalid={touched.password && !!errors.password}/>
                                    <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group controlId='submit'>
                                <Button disabled={Object.keys(errors).length > 0} type='submit'>Register</Button>
                                </Form.Group>
                            </Row>

                        </Form>
                    )
                }
            </Formik>
    </div>
    );
}

export default Registration;