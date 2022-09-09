import React from 'react';

const SignUp = () => {
    return (
        <div className='cont shadow-sm p-3 mb-5 bg-body rounded'>
            <h3 className='text-secondary text-center'> Sign Up</h3>
            <div className=' d-flex justify-content-center'>
                <div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-secondary">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-secondary">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"/>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-secondary">Confirm Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="confirm password"/>
                </div>
                </div>

            </div>
            <div className='d-flex justify-content-center'>
                <button className='btn btn-outline-warning  mt-2 mb-5 '>Sign Up</button>
            </div>
        </div>
    );
};

export default SignUp;