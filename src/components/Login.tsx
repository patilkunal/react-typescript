import * as React from 'react';
import './Login.css';
import { Button, Form } from 'react-bootstrap';

export interface ILoginProps {
}

const LoginComponent: React.FunctionComponent<ILoginProps> =  (props: ILoginProps) => {
    const [formData, setFormData] = React.useState({
        username:'',
        email: '',
        password: ''
    });

    const [validated, setValidated] = React.useState(false);

    const [errors, setErrors] = React.useState({username:'', email:'', password:''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        const loginform = e.currentTarget as HTMLFormElement;
        if(loginform.checkValidity() === false){

        }
        e.preventDefault();
        const valErrors = {username:'', email: '', password: ''};
        if(!formData.email.trim()) {
            valErrors.email = 'Email is required';
        } else if(! /\S+@\S+\.\S+/.test(formData.email)) {
            valErrors.email = 'Email is not valid';
        }
        if(!formData.username.trim()) {
            valErrors.username = 'Username is required';
        } else if(! /\S+@\S+\.\S+/.test(formData.username)) {
            valErrors.username = 'Username is not valid';
        }
        if(!formData.password.trim()) {
            valErrors.password = 'Password is required';
        }
        setErrors(valErrors);
        setValidated(true);
    }

    return (
        <div className='wrapper d-flex align-items-center justify-content-center mt-20'>
            <div className='login'>
                <h2 className='mb-3'>Login Form</h2>
                <div>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Form.Group controlId='username'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control required name="username" onChange={handleChange} isInvalid={!!errors.username}
                        type='text' value={formData.username} placeholder='Enter username'></Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.username}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control required 
                        name="password" value={formData.password} onChange={handleChange} 
                        isInvalid={!!errors.password} type='password' placeholder='Enter password'></Form.Control>
                        <Form.Control.Feedback type='invalid'>{errors.password}</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId='submit'>
                        <Button type='submit' onClick={handleSubmit} variant='success' className='mt-2 w-100'>Login</Button>
                    </Form.Group>
                </Form>
                </div>
            </div>
        </div>
    );
  }

  export default LoginComponent;
