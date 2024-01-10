import * as React from 'react';
import './Login.css';

export interface ILoginProps {
}

const LoginComponent: React.FunctionComponent<ILoginProps> =  (props: ILoginProps) => {
    return (
        <div className='wrapper d-flex align-items-center justify-content-center mt-20'>
            <div className='login'>
                <h2 className='mb-3'>Login Form</h2>
                <form className='needs-validation'>
                    {/* add was-validated after the form is validated */}
                    <div className='form-group mb-2'>
                        <label htmlFor='email' className='form-label'>Email Address</label> 
                        <input type="email" className='form-control' required></input> 
                        <div className="invalid-feedback">Please Enter you email</div>
                    </div>
                    <div className='form-group mb-2'>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' id='password' className='form-control' required></input>
                    </div>
                    <div className='form-group form-check mb-2'>
                        <input type='checkbox' id='rememberme' className='form-check-input'></input>
                        <label htmlFor='rememberme' className='form-check-label'>Remember Me</label>
                    </div>
                    <button type="submit" className='btn btn-success mt-2 w-100'>Login</button>
                </form>
            </div>
        </div>
    );
  }

  export default LoginComponent;
